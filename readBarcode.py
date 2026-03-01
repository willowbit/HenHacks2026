from PIL import Image as PIL
from pdf417decoder import PDF417Decoder

image = PIL.open("./wilson.png")
decoder = PDF417Decoder(image)

if (decoder.decode() > 0):
    decoded = decoder.barcode_data_index_to_string(0)

stuff = decoded.split("\n")

DLN = stuff[1].split("DLDAQ")[-1]
DOB = stuff[12].split("DBB")[1]

NumAndDOB = str(DLN) + str(DOB)
print(NumAndDOB)

with open("tmp.txt", "a") as f:
    f.write(NumAndDOB)