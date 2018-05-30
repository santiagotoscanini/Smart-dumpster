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
      delay(3000);
      pinMode(13, LOW);
      delay(3000);
    }
    if(var= '2'){
      pinMode(13, HIGH);
      delay(150);
      pinMode(13, LOW);
      delay(150);
    }
    if(var= '3'){
      pinMode(13, HIGH);
      delay(5000);
      pinMode(13, LOW);
      delay(5000);
    }
  }
}
