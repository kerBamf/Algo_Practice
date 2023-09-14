# def rgb_to_hex(first, second, third):
#     print(str(hex(third)).lstrip('0x'))
#     string_arr = str(hex(first)).lstrip('0x') + str(hex(second)).lstrip('0x') + str(hex(third)).lstrip('0x')
#     print(string_arr)
#     return string_arr

def rgb_to_hex(first, second, third):
    first_hex = hex(first)
    second_hex= hex(second)
    third_hex = hex(third)

rgb_to_hex(255,255,0)
