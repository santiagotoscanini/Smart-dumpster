#include <Servo.h>

const int Servo1 = 7;
/*const int Servo2 = 6;
const int Servo3 = 5;*/

Servo servo1;
/*Servo servo2;
Servo servo3;*/
  
int num = 0;

void setup() {
servo1.attach(Servo1, 650, 2100);
/*servo2.attach(Servo2, 650, 2100);
servo3.attach(Servo3, 650, 2100);*/

Serial.begin(9600);

servo1.write(0);
/*servo2.write(0);
servo3.write(0);*/
}

void loop() {
  while(Serial.available()>0){
      num = Serial.parseInt();
     switch (num) {
    case 1:
      servo1.write(65);
      break;
    /*case 2:
      servo2.write(65);
      break;
    case 3:
      servo3.write(65);
      break;*/
    case 4:
      servo1.write(0);
      /*servo2.write(0);
      servo3.write(0);*/
      break;
    }
  }
}




