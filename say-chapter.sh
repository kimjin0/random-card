#!/bin/bash
# cards.json 특정 챕터를 맥 음성으로 듣기
#
# 사용법:
#   ./say-chapter.sh 7                 # 7챕터 영어 문장을 순서대로 읽기
#   ./say-chapter.sh 7 -k              # 한국어(상황)도 함께 읽기
#   ./say-chapter.sh 7 -v Daniel       # 음성 지정 (기본: Samantha)
#   ./say-chapter.sh 7 -r 150          # 말하기 속도(단어/분, 기본 145 = 천천히)
#   ./say-chapter.sh 7 -p 700          # 문장 사이 쉼(ms, 기본 550)
#   ./say-chapter.sh 7 -o ch7.m4a      # 재생 대신 오디오 파일로 저장
#
# 파일: 이 스크립트가 있는 폴더의 data/cards.json 사용

set -euo pipefail

CHAPTER="${1:-}"
if [[ -z "$CHAPTER" ]]; then
  echo "사용법: $0 <챕터번호> [-k] [-v 음성] [-r 속도] [-o 파일.m4a]" >&2
  exit 1
fi
shift

VOICE="Ava (Enhanced)"   # 기본 음성 (없으면 Samantha 로 자동 대체)
VOICE_SET=0       # -v 로 직접 지정했는지
RATE="145"        # 천천히 (기본 175보다 느리게)
PAUSE="1200"      # 문장 사이 쉼(ms) — 문장을 확실히 끊어 읽는다
WITH_KO=0
OUTFILE=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    -k) WITH_KO=1; shift ;;
    -v) VOICE="$2"; VOICE_SET=1; shift 2 ;;
    -r) RATE="$2"; shift 2 ;;
    -p) PAUSE="$2"; shift 2 ;;
    -o) OUTFILE="$2"; shift 2 ;;
    *) echo "알 수 없는 옵션: $1" >&2; exit 1 ;;
  esac
done

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
JSON="$DIR/data/cards.json"

# ---- 음성 번호 선택 메뉴 ----------------------------------------------------
# 설치된 영어 음성 중 학습에 쓸 만한 것만 골라 번호로 고르게 한다.
# (개그용/로봇 음성은 제외)
build_voice_list() {
  local skip="Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Wobble|Fred|Good News|Jester|Junior|Organ|Superstar|Ralph|Trinoids|Whisper|Zarvox|Kathy"
  say -v '?' 2>/dev/null | grep -E 'en_US|en_GB' | \
    sed -E 's/[[:space:]]{2,}(en_(US|GB)).*$/\t\1/' | \
    grep -vE "^($skip)\b" | \
    awk -F'\t' '
      # 자연스러운/추천 음성이 위로 오도록 순위 부여
      { n=$1; r=50 }
      n ~ /^(Ava|Allison|Susan|Tom|Nathan|Zoe|Evan|Joelle|Samantha)/ { r=1 }   # 프리미엄·추천(미국)
      n ~ /^Daniel/                                                  { r=2 }   # 영국 추천
      { printf "%02d\t%s\t%s\n", r, $1, $2 }
    ' | sort -s -k1,1n | cut -f2-
}

pick_voice() {
  # 목록을 배열로 읽기
  local IFS=$'\n'
  local rows=($(build_voice_list))
  local names=() locs=()
  local i name loc
  for i in "${!rows[@]}"; do
    name="${rows[$i]%$'\t'*}"; loc="${rows[$i]##*$'\t'}"
    names+=("$name"); locs+=("$loc")
  done

  while true; do
    echo "" >&2
    echo "사용할 영어 음성을 고르세요:" >&2
    for i in "${!names[@]}"; do
      local mark=""
      [[ "${names[$i]}" == "Ava (Enhanced)" ]] && mark="  ← 추천(고품질)"
      [[ "${names[$i]}" == "Samantha" ]] && mark="  ← 미국"
      [[ "${names[$i]}" == "Daniel"  ]] && mark="  ← 영국"
      printf "  %2d) %-22s %s%s\n" "$((i+1))" "${names[$i]}" "${locs[$i]}" "$mark" >&2
    done
    echo "" >&2
    printf "번호 입력  (미리듣기: p+번호 예 p1 / 그냥 Enter=Ava): " >&2
    local ans; read -r ans < /dev/tty || ans=""

    # Enter → Ava 우선, 없으면 목록 맨 위
    if [[ -z "$ans" ]]; then
      for i in "${!names[@]}"; do [[ "${names[$i]}" == "Ava (Enhanced)" ]] && { VOICE="${names[$i]}"; return; }; done
      VOICE="${names[0]}"; return
    fi
    # 미리듣기: p3
    if [[ "$ans" =~ ^[pP]([0-9]+)$ ]]; then
      local n="${BASH_REMATCH[1]}"
      if (( n>=1 && n<=${#names[@]} )); then
        echo "  ♪ 미리듣기: ${names[$((n-1))]}" >&2
        say -v "${names[$((n-1))]}" -r "$RATE" "Hi, Mina. What are you doing this weekend? I love hiking."
      else echo "  범위를 벗어난 번호예요." >&2; fi
      continue
    fi
    # 선택: 숫자
    if [[ "$ans" =~ ^[0-9]+$ ]] && (( ans>=1 && ans<=${#names[@]} )); then
      VOICE="${names[$((ans-1))]}"
      echo "  ✓ 선택: $VOICE" >&2
      return
    fi
    echo "  잘못 입력했어요. 번호 또는 p+번호를 입력하세요." >&2
  done
}

# -v 지정 없이 재생(파일저장 아님)일 때만 메뉴 표시
if [[ "$VOICE_SET" == "0" && -z "$OUTFILE" && -t 0 ]]; then
  pick_voice
fi

# 안전장치: 고른 음성이 설치돼 있지 않으면 Samantha 로 대체
if ! say -v '?' 2>/dev/null | grep -qF "$VOICE"; then
  echo "⚠️  '$VOICE' 음성이 없어 Samantha 로 대체합니다." >&2
  VOICE="Samantha"
fi
# ---------------------------------------------------------------------------

# 챕터 문장을 한 줄씩(영어, 또는 한국어\t영어) 뽑는다
TEXT="$(python3 - "$JSON" "$CHAPTER" "$WITH_KO" <<'PY'
import json, sys
path, chapter, with_ko = sys.argv[1], int(sys.argv[2]), sys.argv[3] == "1"
data = json.load(open(path, encoding="utf-8"))
ch = next((c for c in data if c.get("chapter") == chapter), None)
if ch is None:
    sys.stderr.write(f"챕터 {chapter} 을(를) 찾을 수 없습니다.\n"); sys.exit(2)
sys.stderr.write(f"[{ch.get('chapter')}] {ch.get('title','')} · {len(ch['cards'])}문장\n")
lines = []
for card in ch["cards"]:
    en = (card.get("answer") or "").strip()
    ko = (card.get("situation") or "").strip()
    if with_ko and ko:
        lines.append(f"{ko}\t{en}")
    else:
        lines.append(en)
print("\n".join(lines))
PY
)"

# PAUSE(ms) → sleep 초(예: 1200 → 1.2)
pause_sec() { awk -v p="$PAUSE" 'BEGIN{ printf "%.3f", p/1000 }'; }

# 재생: 문장을 "하나씩" 따로 읽고, 사이에 실제로 쉰다(또박또박 끊어 읽기).
speak() {
  local gap; gap="$(pause_sec)"
  local n=0
  if [[ "$WITH_KO" == "1" ]]; then
    while IFS=$'\t' read -r ko en; do
      [[ -z "$ko$en" ]] && continue
      (( n++ )) && sleep "$gap"
      [[ -n "$ko" ]] && say -v Yuna -r "$RATE" "$ko"
      [[ -n "$en" ]] && { sleep 0.3; say -v "$VOICE" -r "$RATE" "$en"; }
    done <<< "$TEXT"
  else
    while IFS= read -r en; do
      [[ -z "$en" ]] && continue
      (( n++ )) && sleep "$gap"
      say -v "$VOICE" -r "$RATE" "$en"
    done <<< "$TEXT"
  fi
}

if [[ -n "$OUTFILE" ]]; then
  # 파일 저장은 한 번의 say 로만 되므로, 문장 사이 쉼은 [[slnc]] 로 넣는다.
  printf '%s\n' "$TEXT" | cut -f2- | \
    awk -v p="$PAUSE" 'NF{ if(n++) printf " [[slnc %d]] ", p; printf "%s", $0 }' | \
    say -v "$VOICE" -r "$RATE" -o "$OUTFILE"
  echo "저장 완료: $OUTFILE"
else
  speak
fi
