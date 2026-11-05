/**
 * 한 문장 30번 — 문장 데이터
 *
 * drills: 30개, [한국어 문제, 영어 모범 답, 조건(선택)]
 *   1~5   주어 바꾸기
 *   6~10  시제·형태
 *   11~15 부정·의문
 *   16~20 동사 바꾸기
 *   21~25 상황 적용
 *   26~30 자유 응용 (정답이 여러 개 — 영어는 "예시"로만 보여 줌)
 *
 * file:// 로 열어도 동작하도록 JSON 대신 전역 변수로 둔다.
 */
window.S30_DATA = [
  {
    id: "was-going-to",
    en: "I was going to call you, but I forgot.",
    ko: "전화하려고 했는데, 깜빡했어.",
    point: "was/were going to + 동사원형 = ~하려고 했는데 (결국 못 했다)",
    drills: [
      ["그녀는 나한테 전화하려고 했는데, 깜빡했어.", "She was going to call me, but she forgot.", "주어 she"],
      ["우리는 너한테 전화하려고 했는데, 깜빡했어.", "We were going to call you, but we forgot.", "주어 we"],
      ["그는 그들에게 전화하려고 했는데, 깜빡했어.", "He was going to call them, but he forgot.", "주어 he"],
      ["그들은 우리한테 전화하려고 했는데, 깜빡했어.", "They were going to call us, but they forgot.", "주어 they"],
      ["내 동생이 너한테 전화하려고 했는데, 깜빡했어.", "My brother was going to call you, but he forgot.", "주어 my brother"],

      ["이따가 너한테 전화할 거야.", "I'm going to call you later.", "현재 · 계획"],
      ["내일 너한테 전화하려고 해.", "I'm going to call you tomorrow.", "현재 · 계획"],
      ["전화하려고 했는데, 너무 바빴어.", "I was going to call you, but I was too busy.", "이유 바꾸기"],
      ["전화하려고 했는데, 너무 늦었더라.", "I was going to call you, but it was too late.", "이유 바꾸기"],
      ["전화하려고 했는데, 네가 먼저 했네.", "I was going to call you, but you called me first.", "이유 바꾸기"],

      ["나한테 전화하려던 거 아니었어?", "Weren't you going to call me?", "부정 의문"],
      ["언제 나한테 전화하려고 했어?", "When were you going to call me?", "의문 when"],
      ["원래 전화 안 하려고 했어.", "I wasn't going to call you.", "부정"],
      ["왜 나한테 전화하려고 했어?", "Why were you going to call me?", "의문 why"],
      ["그녀가 나한테 전화하려고 했어?", "Was she going to call me?", "의문"],

      ["메일 보내려고 했는데, 깜빡했어.", "I was going to email you, but I forgot.", "email"],
      ["말하려고 했는데, 깜빡했어.", "I was going to tell you, but I forgot.", "tell"],
      ["물어보려고 했는데, 깜빡했어.", "I was going to ask you, but I forgot.", "ask"],
      ["그거 사려고 했는데, 깜빡했어.", "I was going to buy it, but I forgot.", "buy"],
      ["문자 보내려고 했는데, 깜빡했어.", "I was going to text you, but I forgot.", "text"],

      ["그 얘기 꺼내려고 했는데, 시간이 다 됐어.", "I was going to bring it up, but we ran out of time.", "회의"],
      ["일찍 퇴근하려고 했는데, 일이 생겼어.", "I was going to leave early, but something came up.", "퇴근"],
      ["오늘 운동하려고 했는데, 비가 왔어.", "I was going to work out today, but it rained.", "운동"],
      ["어제 배포하려고 했는데, 버그를 발견했어.", "I was going to deploy it yesterday, but I found a bug.", "개발"],
      ["너 도와주려고 했는데, 네가 벌써 끝냈더라.", "I was going to help you, but you had already finished.", "동료"],

      ["오늘 하려다가 못 한 일 하나를 말해 보세요.", "I was going to clean my room, but I was too tired.", "자유"],
      ["누군가에게 하려다 못 한 말을 해 보세요.", "I was going to say sorry, but I couldn't find the right moment.", "자유"],
      ["상대에게 \"~하려던 거 아니었어?\" 하고 물어보세요.", "Weren't you going to join us for dinner?", "자유"],
      ["주말 계획이 틀어진 이야기를 해 보세요.", "I was going to go hiking this weekend, but my plans changed.", "자유"],
      ["\"원래 그럴 생각은 없었어\" 하고 해명해 보세요.", "I wasn't going to tell anyone, but it slipped out.", "자유"]
    ]
  },
  {
    id: "should-have",
    en: "I should have checked it earlier.",
    ko: "더 일찍 확인했어야 했어.",
    point: "should have + 과거분사 = ~했어야 했는데 (안 했다, 후회)",
    drills: [
      ["너는 더 일찍 확인했어야 했어.", "You should have checked it earlier.", "주어 you"],
      ["우리는 더 일찍 확인했어야 했어.", "We should have checked it earlier.", "주어 we"],
      ["그는 더 일찍 확인했어야 했어.", "He should have checked it earlier.", "주어 he"],
      ["그들은 더 일찍 확인했어야 했어.", "They should have checked it earlier.", "주어 they"],
      ["누군가는 더 일찍 확인했어야 했어.", "Someone should have checked it earlier.", "주어 someone"],

      ["지금 확인해 봐야겠어.", "I should check it now.", "현재 should"],
      ["더 일찍 확인할 수도 있었는데.", "I could have checked it earlier.", "could have"],
      ["확인했어야 했는데, 안 했어.", "I should have checked it, but I didn't.", "but 붙이기"],
      ["더 일찍 확인했더라면 좋았을 텐데.", "I wish I had checked it earlier.", "I wish"],
      ["미리 확인했어야 했어.", "I should have checked it in advance.", "in advance"],

      ["그거 보내지 말았어야 했어.", "I shouldn't have sent it.", "부정"],
      ["내가 더 일찍 확인했어야 했나?", "Should I have checked it earlier?", "의문"],
      ["그렇게 말하지 말았어야 했어.", "I shouldn't have said that.", "부정"],
      ["너 그거 먼저 확인했어야 하는 거 아니야?", "Shouldn't you have checked it first?", "부정 의문"],
      ["그렇게 많이 먹지 말았어야 했어.", "I shouldn't have eaten so much.", "부정"],

      ["더 일찍 출발했어야 했어.", "I should have left earlier.", "leave"],
      ["너한테 더 일찍 말했어야 했어.", "I should have told you earlier.", "tell"],
      ["백업해 뒀어야 했어.", "I should have backed it up.", "back up"],
      ["더 일찍 잤어야 했어.", "I should have gone to bed earlier.", "go to bed"],
      ["우산을 가져왔어야 했어.", "I should have brought an umbrella.", "bring"],

      ["테스트를 먼저 돌려 봤어야 했어.", "I should have run the tests first.", "개발"],
      ["자료를 미리 공유했어야 했어.", "I should have shared the materials in advance.", "회의"],
      ["사기 전에 사이즈를 확인했어야 했어.", "I should have checked the size before buying it.", "쇼핑"],
      ["표를 미리 예매했어야 했어.", "I should have booked the tickets in advance.", "여행"],
      ["먼저 물어봤어야 했는데, 미안해.", "I should have asked you first. I'm sorry.", "사과"],

      ["최근에 후회되는 일 하나를 말해 보세요.", "I should have saved more money last year.", "자유"],
      ["친구에게 \"진작 말하지 그랬어\" 해 보세요.", "You should have told me sooner.", "자유"],
      ["하지 말았어야 했던 일을 말해 보세요.", "I shouldn't have stayed up so late.", "자유"],
      ["일하면서 깨달은 점을 말해 보세요.", "I should have asked for help earlier.", "자유"],
      ["할 수 있었는데 미룬 일을 말해 보세요. (could have)", "I could have finished it yesterday, but I put it off.", "자유"]
    ]
  },
  {
    id: "it-took-me",
    en: "It took me two hours to fix the bug.",
    ko: "버그 고치는 데 두 시간 걸렸어.",
    point: "It takes (사람) (시간) to + 동사원형 = (누가) ~하는 데 (시간이) 걸리다",
    drills: [
      ["그가 버그 고치는 데 두 시간 걸렸어.", "It took him two hours to fix the bug.", "대상 him"],
      ["우리가 버그 고치는 데 두 시간 걸렸어.", "It took us two hours to fix the bug.", "대상 us"],
      ["그녀가 버그 고치는 데 두 시간 걸렸어.", "It took her two hours to fix the bug.", "대상 her"],
      ["그들이 그 버그 고치는 데 이틀 걸렸어.", "It took them two days to fix the bug.", "대상 them"],
      ["팀 전체가 그걸 고치는 데 일주일 걸렸어.", "It took the whole team a week to fix it.", "대상 the whole team"],

      ["그거 고치는 데 두 시간 걸릴 거야.", "It will take two hours to fix it.", "미래"],
      ["나는 출근하는 데 보통 30분 걸려.", "It usually takes me thirty minutes to get to work.", "현재 · 습관"],
      ["그거 고치는 데 시간이 오래 걸리고 있어.", "It's taking a long time to fix it.", "진행형"],
      ["끝내는 데 생각보다 오래 걸렸어.", "It took me longer than I expected to finish it.", "비교"],
      ["오래 안 걸릴 거야.", "It won't take long.", "미래 부정"],

      ["그거 고치는 데 얼마나 걸렸어?", "How long did it take you to fix it?", "의문 · 과거"],
      ["거기까지 가는 데 얼마나 걸려?", "How long does it take to get there?", "의문 · 현재"],
      ["오래 안 걸렸어.", "It didn't take long.", "부정"],
      ["그거 하는 데 얼마나 걸릴까?", "How long will it take?", "의문 · 미래"],
      ["몇 분밖에 안 걸렸어.", "It only took a few minutes.", "only"],

      ["이 책 다 읽는 데 한 달 걸렸어.", "It took me a month to finish this book.", "finish"],
      ["적응하는 데 시간이 좀 걸렸어.", "It took me a while to get used to it.", "get used to"],
      ["결정하는 데 오래 걸렸어.", "It took me a long time to decide.", "decide"],
      ["살 집 구하는 데 3주 걸렸어.", "It took me three weeks to find a place.", "find"],
      ["잠드는 데 한 시간 걸렸어.", "It took me an hour to fall asleep.", "fall asleep"],

      ["서버 다시 띄우는 데 10분 걸렸어.", "It took ten minutes to restart the server.", "개발"],
      ["차가 막혀서 여기 오는 데 한 시간 반 걸렸어.", "It took me an hour and a half to get here because of traffic.", "출근"],
      ["이거 만드는 데 세 시간 걸렸어.", "It took me three hours to make this.", "요리"],
      ["이 문장 외우는 데 5분 걸렸어.", "It took me five minutes to memorize this sentence.", "공부"],
      ["합의하는 데 회의를 두 번 했어.", "It took two meetings to reach an agreement.", "회의"],

      ["오늘 가장 오래 걸린 일을 말해 보세요.", "It took me all morning to write the report.", "자유"],
      ["출근(등교)하는 데 걸리는 시간을 말해 보세요.", "It takes me about forty minutes to get to work.", "자유"],
      ["상대에게 무언가 배우는 데 얼마나 걸렸는지 물어보세요.", "How long did it take you to learn English?", "자유"],
      ["생각보다 빨리 끝난 일을 말해 보세요.", "It took less time than I thought.", "자유"],
      ["무언가에 익숙해지는 데 걸린 시간을 말해 보세요.", "It took me a year to get used to living alone.", "자유"]
    ]
  },
  {
    id: "do-you-mind",
    en: "Do you mind if I ask you something?",
    ko: "뭐 하나 물어봐도 될까요?",
    point: "Do you mind if + 주어 + 동사 = ~해도 괜찮을까요? (대답 \"괜찮아요\"는 No / Not at all)",
    drills: [
      ["저희가 여기 앉아도 될까요?", "Do you mind if we sit here?", "주어 we"],
      ["제 친구도 같이 가도 될까요?", "Do you mind if my friend comes along?", "주어 my friend"],
      ["그가 창문을 열어도 괜찮을까요?", "Do you mind if he opens the window?", "주어 he"],
      ["저희가 조금 일찍 가도 될까요?", "Do you mind if we leave a little early?", "주어 we"],
      ["그녀가 내일 합류해도 될까요?", "Do you mind if she joins us tomorrow?", "주어 she"],

      ["창문 좀 열어 주시겠어요?", "Would you mind opening the window?", "Would you mind -ing"],
      ["잠깐만 기다려 주시겠어요?", "Would you mind waiting a moment?", "Would you mind -ing"],
      ["뭐 하나 여쭤봐도 괜찮을까요? (더 공손하게)", "Would you mind if I asked you something?", "Would you mind if + 과거"],
      ["저는 전혀 상관없어요.", "I don't mind at all.", "대답"],
      ["실례가 안 된다면, 몇 살이세요?", "If you don't mind me asking, how old are you?", "If you don't mind"],

      ["기다리는 건 괜찮아요.", "I don't mind waiting.", "부정"],
      ["제가 조금 늦어도 괜찮을까요?", "Do you mind if I'm a little late?", "be 동사"],
      ["신경 쓰지 마세요.", "Never mind.", "표현"],
      ["내가 싫어할 것 같아?", "Do you think I'd mind?", "의문"],
      ["이거 써도 돼요?", "Do you mind if I use this?", "use"],

      ["여기 앉아도 될까요?", "Do you mind if I sit here?", "sit"],
      ["사진 찍어도 될까요?", "Do you mind if I take a picture?", "take a picture"],
      ["이 전화 좀 받아도 될까요?", "Do you mind if I take this call?", "take a call"],
      ["잠깐 쉬어도 될까요?", "Do you mind if I take a short break?", "take a break"],
      ["펜 좀 빌려도 될까요?", "Do you mind if I borrow your pen?", "borrow"],

      ["제가 끼어들어도 될까요?", "Do you mind if I jump in?", "회의"],
      ["에어컨 좀 꺼도 될까요?", "Do you mind if I turn off the air conditioner?", "사무실"],
      ["제 화면 공유해도 될까요?", "Do you mind if I share my screen?", "화상 회의"],
      ["이 의자 가져가도 될까요?", "Do you mind if I take this chair?", "식당"],
      ["오늘 조금 일찍 퇴근해도 될까요?", "Do you mind if I leave a bit early today?", "퇴근"],

      ["동료에게 무언가를 부탁해 보세요. (Would you mind -ing)", "Would you mind checking my code?", "자유"],
      ["처음 만난 사람에게 조심스럽게 질문해 보세요.", "If you don't mind me asking, where are you from?", "자유"],
      ["지금 있는 곳에서 허락을 구해 보세요.", "Do you mind if I open the window?", "자유"],
      ["\"괜찮아요, 그렇게 하세요\" 하고 대답해 보세요.", "Not at all. Go ahead.", "자유"],
      ["다른 사람을 대신해서 허락을 구해 보세요.", "Do you mind if my coworker joins the call?", "자유"]
    ]
  },
  {
    id: "not-sure-if",
    en: "I'm not sure if I can make it on time.",
    ko: "제시간에 갈 수 있을지 모르겠어.",
    point: "I'm not sure if + 문장 = ~인지 잘 모르겠어 / make it = (제때) 도착하다, 해내다",
    drills: [
      ["그녀가 제시간에 올 수 있을지 모르겠어.", "I'm not sure if she can make it on time.", "주어 she"],
      ["우리가 제시간에 도착할 수 있을지 모르겠어.", "I'm not sure if we can make it on time.", "주어 we"],
      ["그가 제시간에 끝낼 수 있을지 모르겠어.", "I'm not sure if he can finish it on time.", "주어 he"],
      ["그들이 오는지 모르겠어.", "I'm not sure if they're coming.", "주어 they"],
      ["그녀는 자기가 갈 수 있을지 잘 모르겠대.", "She's not sure if she can make it.", "주어 she"],

      ["제시간에 갈 수 있을지 몰랐어.", "I wasn't sure if I could make it on time.", "과거"],
      ["제시간에 갈 수 있을 것 같아.", "I think I can make it on time.", "긍정"],
      ["제시간에 못 갈 것 같아.", "I don't think I can make it on time.", "부정 예측"],
      ["제시간에 도착했어!", "I made it on time!", "과거"],
      ["갈 수 있을지 알려 줄게.", "I'll let you know if I can make it.", "미래"],

      ["제시간에 올 수 있어?", "Can you make it on time?", "의문"],
      ["그가 올 수 있는지 알아?", "Do you know if he can make it?", "의문"],
      ["결국 못 갔어.", "I couldn't make it.", "부정"],
      ["우리 제시간에 갈 수 있을까?", "Do you think we can make it on time?", "의문"],
      ["이게 맞는지 잘 모르겠어.", "I'm not sure if this is right.", "be 동사"],

      ["이게 될지 모르겠어.", "I'm not sure if this will work.", "work"],
      ["그가 기억할지 모르겠어.", "I'm not sure if he'll remember.", "remember"],
      ["내가 제대로 이해했는지 모르겠어.", "I'm not sure if I understood it correctly.", "understand"],
      ["그녀가 좋아할지 모르겠어.", "I'm not sure if she'll like it.", "like"],
      ["문을 잠갔는지 모르겠어.", "I'm not sure if I locked the door.", "lock"],

      ["차가 막혀서 제시간에 못 갈 수도 있어.", "I might not make it on time because of traffic.", "약속"],
      ["금요일까지 끝낼 수 있을지 모르겠어.", "I'm not sure if I can finish it by Friday.", "마감"],
      ["오늘 회의에 참석할 수 있을지 모르겠어.", "I'm not sure if I can attend today's meeting.", "회의"],
      ["토요일 파티에 갈 수 있을지 모르겠어.", "I'm not sure if I can make it to the party on Saturday.", "파티"],
      ["이 수정으로 문제가 해결될지 모르겠어.", "I'm not sure if this fix will solve the problem.", "개발"],

      ["확실하지 않은 일정을 말해 보세요.", "I'm not sure if I can join you for lunch tomorrow.", "자유"],
      ["상대에게 올 수 있는지 물어보세요.", "Can you make it to the meeting at three?", "자유"],
      ["아슬아슬하게 제시간에 도착한 이야기를 해 보세요.", "I almost missed the bus, but I made it on time.", "자유"],
      ["자신 없는 결정에 대해 말해 보세요.", "I'm not sure if I made the right choice.", "자유"],
      ["갈 수 있는지 나중에 알려 주겠다고 해 보세요.", "I'll let you know by tonight if I can make it.", "자유"]
    ]
  }
];
