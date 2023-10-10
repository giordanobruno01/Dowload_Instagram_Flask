
source = "amazing"
pattern = "010"
vowels = ['a', 'e', 'i', 'o', 'u', 'y']
check = ""
match = 0
for i in range(len(source)-(len(pattern)-1)):

    for j in range(len(pattern)):
       
        if source[i+j] in vowels:
            check = check+"0"
        else:
            check = check+"1"
    
    if(check==pattern):
        match+= 1
    check = ""

  
print(match)

