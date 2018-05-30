import serial
import time

ser = serial.Serial("COM14", 9600)

readMe = open("basura.txt","r").read()
print (readMe)


hola = True
while(hola):
    print(readMe)
    ser.write(readMe.encode())
    time.sleep(20)
    readMe = open("basura.txt","r").read()

