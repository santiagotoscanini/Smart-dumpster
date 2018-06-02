import serial
import time

ser = serial.Serial("COM14", 9600)

readMe = open("basura.txt","r").read()
redTwo = "4"


#print ("readmeTest {}".format(readMe))

hola = True
while(hola):
    time.sleep(1)
    ser.write(readMe.encode())
    time.sleep(4)
    ser.write(redTwo.encode())
    readMe = open("basura.txt","r").read()
