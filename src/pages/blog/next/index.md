---
title: "Test2"
date: "2020/05/13"
slug: "next"
description: "Test2"
---

```py
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```

```py
src = "b.txt"

data_raw = [x for x in open(src).read().strip().split("\n")]
parser = {
    "0": "0000",
    "1": "0001",
    "2": "0010",
    "3": "0011",
    "4": "0100",
    "5": "0101",
    "6": "0110",
    "7": "0111",
    "8": "1000",
    "9": "1001",
    "A": "1010",
    "B": "1011",
    "C": "1100",
    "D": "1101",
    "E": "1110",
    "F": "1111",
}

data = "".join([parser[x] for x in data_raw[0]])

sumofversions = 0


def solve(data):
    global sumofversions
    version = int(data[:3], 2)
    sumofversions += version
    data = data[3:]

    tid = int(data[:3], 2)
    data = data[3:]
    
    if tid == 4:
        t = ""
        while True:
            t += data[1:5]; cnt = data[0]; data = data[5:]
            if cnt == "0": break
        return (data, int(t, 2))
    else:
        ltid = data[0]; data = data[1:]; sub_pkt_val = []
        if ltid == "0":
            l = data[:15]; data = data[15:]; sub_pkt_len = int(l, 2)
            sub_pkt = data[:sub_pkt_len]
            while sub_pkt:
                s, x = solve(sub_pkt)
                sub_pkt = s; sub_pkt_val.append(x)
            data = data[sub_pkt_len:]
        else:
            l = data[:11]; data = data[11:]; sub_pkt_qty = int(l, 2)
            for i in range(sub_pkt_qty):
                s, x = solve(data); data = s; sub_pkt_val.append(x)
        
        match tid:
            case 0:
                return (data, sum(sub_pkt_val))
            case 1:
                p = 1
                for x in sub_pkt_val: p *= x; return (data, p)
            case 2:
                return (data, min(sub_pkt_val))
            case 3:
                return (data, max(sub_pkt_val))
            case 5:
                return (data, 1 if sub_pkt_val[0] > sub_pkt_val[1] else 0)
            case 6:
                return (data, 1 if sub_pkt_val[0] < sub_pkt_val[1] else 0)
            case 7:
                return (data, 1 if sub_pkt_val[0] == sub_pkt_val[1] else 0)


if __name__ == "__main__":
    import time
    now = time.time()
    try:
        print(solve(data)[1]); delta = time.time() - now
    finally:
        print(f"{float(delta):.20f} seconds")
```