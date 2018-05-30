String var = "";
void setup() {
  // put your setup code here, to run once:
  pinMode(13,HIGH);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()>0){
    if(var= '1'){
      pinMode(13, HIGH);
      delay(1500);
      pinMode(13, LOW);
      delay(1500);
    }
    if(var= '2'){
      pinMode(13, HIGH);
      delay(10);
      pinMode(13, LOW);
      delay(10);
    }
    if(var= '3'){
      pinMode(13, HIGH);
      delay(5000);
      pinMode(13, LOW);
      delay(5000);
    }
  }
}
