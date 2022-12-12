class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
  }
  over() {
    //마우스오버 시 참
    if (dist(this.x + 30, this.y + 25, mouseX, mouseY) < 35) {
      return true;
    } else {
      return false;
    }
  }
  show() {
    //기본 사각형 버튼
    if (this.over()) {
      push();
      tint(80, 20, 10, 180);
      image(introNext, this.x, this.y, this.w, this.h);
      pop();
    } else image(introNext, this.x, this.y, this.w, this.h);
  }
  location([_x, _y]) {
    this.x = _x;
    this.y = _y;
  }
  next(n) {
    //스테이지 넘기는 버튼
    if (this.over()) {
      if (stage == 0) {
        loadDialogue();
      } else if (stage == 27) {
        matchGameScore1 = 0;
        matchGameScore2 = 0;
        matchGameScore3 = 0;
      }
      stage = stage + n;
      stageStart = true;
      clickNum = 0;
      correctMatch = false;
    }
  }
}

class Skip {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 40;
  }
  skip_over() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else return false;
  }
  skip_show() {
    if (this.skip_over()) {
      push();
      tint(80, 20, 10, 180);
      image(tutSkip, this.x, this.y, this.w, this.h);
      pop();
    } else image(tutSkip, this.x, this.y, this.w, this.h);
  }
  skip() {
    if (this.skip_over()) {
      stage += 6;
      enter = 0;
      introSound.setVolume(0.2);
    }
  }
}

class Reset {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 40;
  }
  reset_over() {
    if (
      mouseX > this.x - 55 &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else return false;
  }
  reset_show() {
    if (this.reset_over()) {
      push();
      tint(80, 20, 10, 180);
      image(reset, this.x, this.y, this.w, this.h);
      image(resetImage, this.x - 55, this.y - 10);
      pop();
    } else {
      image(reset, this.x, this.y, this.w, this.h);
      image(resetImage, this.x - 55, this.y - 10);
    }
  }
  reset() {
    if (this.reset_over()) {
      stage = 0;
      enter = 0;
      introSound.stop();
      outroSound.stop();
      timerSound.stop();
      callSound.stop();
      callFailureSound.stop();
      callSuccessSound_1.stop();
      callSuccessSound_2.stop();
      callSuccessSound_3.stop();
      helloSound.stop();
      helloSound_1.stop();

      _name = "";
      outroSoundIsTrue = false;
      cursorOn = true;

      dayStart = true;

      loveScore = 0;
      loveResult1 = false;
      loveResult2 = false;

      cursorOn = true;

      case4Num = 0;
      scheduleNum = 0;
      case7Num = 0;
      case9BackX = 0;
      // barY_1 = 0;
      // barY = 0;
      // barSpeed = 5; // 여기를 늘리면 눈을 깜박이는 속도가 빨라집니다
      // barGrav = 0.03;

      imageAlpha0 = 0;
      imageAlpha1 = 0;
      imageAlpha2 = 0;
      imageAlpha3 = 0;
      imageAlpha4 = 0;
      imageAlpha5 = 0;
      imageAlpha6 = 0;
      imageAlpha7 = 0;
      imageAlpha8 = 0;
      imageAlpha9 = 0;

      imageAlpha59 = 0;
      imageAlpha60 = 0;
      imageAlpha61 = 0;
      imageAlpha62 = 0;
      imageAlpha63 = 0;
      imageAlpha64 = 0;
      imageAlpha65 = 0;
      imageAlpha66 = 0;
      imageAlpha67 = 0;
      imageAlpha68 = 0;
      imageAlpha69 = 0;
      imageAlpha70 = 0;

      windowX = 1200;
      windowY = 10;
      windowW = 390;
      windowH = 250;

      case9Y = 0;
      case9Speed = 0.8;
      timestamp = 0;

      pts = [];
      snows = [];

      matchGameScore = 0;
      matchGameScore1 = 0;
      matchGameScore2 = 0;
      matchGameScore3 = 0;

      matchGameScoreIsTrue = false;

      clickNum = 0;

      wrongAnswerDelayCount = 2;
      wrongAnswerTiming = 0;
      wrongAnswerDelay = false;

      stageStartTiming = 0;
      stageStart = true;

      stop = false;

      click_book0 = false;
      click_book1 = false;
      click_book2 = false;
      click_book3 = false;
      click_book4 = false;
      click_book5 = false;
      hideLine = false;

      quiz_1_1 = shuffle(quiz_1);
      quiz_2_1 = shuffle(quiz_2);
      quiz_3_1 = shuffle(quiz_3);

      // introSound.setVolume(0.2);

      if (introSound.isPlaying()) {
        introSound.stop();
      }
    }
  }
}

class Selection {
  constructor(x, y, w, h, _text) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = _text;
    this.textSize = 20;
  }
  over() {
    let x2 = this.x + this.w;
    let y2 = this.y + this.h;
    if (this.x < mouseX && mouseX < x2 && this.y < mouseY && mouseY < y2) {
      return true;
    } else return false;
  }
  display() {
    if (this.over()) {
      image(option_box_1, this.x, this.y, this.w, this.h);
    } else image(option_box, this.x, this.y, this.w, this.h);
    // textFont(mukmul);
    textAlign(LEFT);
    textSize(this.textSize);
    fill(0);
    textWrap(WORD);
    text(this.text, this.x + 20, this.y + 30, this.w - 30, this.h);
  }
  next(n) {
    //스테이지 넘기는 버튼
    if (this.over()) {
      stage = stage + n;
      stageStart = true;
      clickNum = 0;
      correctMatch = false;
    }
  }
}

class Text {
  constructor(text) {
    this.text = text;
    this.x = 1050 + 140;
    this.y = 790;
    this.w = 380;
    this.h = 120;
    this.splitString = split(this.text, ":"); // :을 기준으로 text split, 말풍선 구분
  }
  showDialogue() {
    textAlign(LEFT);
    fill(0);
    textWrap(WORD);
    if (this.splitString[0] == "P") {
      //"P"=파란말풍선
      // print("P");
      image(dialogue_B, this.x, this.y, this.w, this.h);
      text(this.splitString[1], this.x + 60, this.y + 40, this.w - 80, this.h);
    } else if (this.splitString[0] == "M") {
      //"M"=핑크색 말풍선
      // print("M");
      image(dialogue_P, this.x + 20, this.y, this.w, this.h);
      text(this.splitString[1], this.x + 60, this.y + 40, this.w - 80, this.h);
    } else if (this.splitString[0] == "D") {
      //"D"=지시문
      textAlign(CENTER);
      // print("D");
      // image(textBox_2, this.x + 20, this.y, this.w, this.h);
      text(this.splitString[1], this.x + 40, this.y + 30, this.w - 80, this.h);
    }
  }
  goUp() {
    //말풍선 한칸씩 위로 이동, dialogue box를 넘어가면 없어짐
    this.y -= 120;
    if (this.y < 250) {
      this.y = -999;
    }
  }
}

class Timer {
  constructor(maxTime, _x, _y, _w, _h) {
    this.maxTime = maxTime;
    this.now = 0;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.timerStop = false;
    this.stopFrameCount = 0;
    this.stopFrameCountIsTrue = true;
    this.answerDelayCount = 2;
  }
  bar() {
    image(timerBar, this.x, this.y, this.w, this.h);
    push();
    fill(255, 231, 173);
    stroke(0);
    strokeWeight(2);
    rectMode(CORNERS);
    rect(
      this.x + this.w,
      this.y + 1,
      this.x + (this.w * (this.maxTime - this.now)) / this.maxTime,
      this.y + this.h - 1
    );
    pop();
  }
  setUpTimer() {
    if (
      !this.timerStop &&
      int((millis() - stageStartTiming) / 1000.0) >= this.now &&
      this.now < this.maxTime
    ) {
      this.now++;
    }

    if (this.now == this.maxTime) {
      if (timerSound.isPlaying()) {
        timerSound.stop();
      }
      if (this.stopFrameCountIsTrue) {
        this.stopFrameCount = frameCount;
        this.stopFrameCountIsTrue = false;
      }
      if (
        frameCount % 60 == this.stopFrameCount % 60 &&
        this.answerDelayCount > 0
      ) {
        this.answerDelayCount--;
        if (!callFailureSound.isPlaying()) {
          callFailureSound.setVolume(0.5);
          callFailureSound.play();
        }
      }
      if (this.answerDelayCount > 0) {
        image(
          dialogue_W,
          dialogue_x + 80,
          dialogue_y + 400,
          dialogue_w,
          dialogue_h
        );
        fill(0);
        textAlign(LEFT);
        textFont(mukmul);
        textSize(20);
        text("실망이에요", dialogue_x + 140, dialogue_y + 460);
      }
      if (this.answerDelayCount == 0) {
        if (callFailureSound.isPlaying()) {
          callFailureSound.stop();
        }
        clickNum = 0;
        this.now = 0;
        correctMatch = false;
        this.timerStop = false;
        this.answerDelayCount = 2;
        stageStart = true;
        this.stopFrameCountIsTrue = true;
        stage++;
      }
    }
    if (correctMatch) {
      this.timerStop = true;
      if (this.stopFrameCountIsTrue) {
        this.stopFrameCount = frameCount;
        this.stopFrameCountIsTrue = false;
      }
    }
    if (this.timerStop) {
      timerSound.stop();
      if (
        frameCount % 60 == this.stopFrameCount % 60 &&
        this.answerDelayCount > 0
      ) {
        this.answerDelayCount--;
      }
      if (this.answerDelayCount == 0) {
        if (callSuccessSound_1.isPlaying()) {
          callSuccessSound_1.stop();
        } else if (callSuccessSound_2.isPlaying()) {
          callSuccessSound_2.stop();
        } else if (callSuccessSound_3.isPlaying()) {
          callSuccessSound_3.stop();
        }
        clickNum = 0;
        this.now = 0;
        correctMatch = false;
        this.timerStop = false;
        this.answerDelayCount = 2;
        stageStart = true;
        this.stopFrameCountIsTrue = true;
        stage++;
      }
    }
  }
}
