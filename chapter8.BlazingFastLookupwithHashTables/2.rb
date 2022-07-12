# HAST TALBES FOR ORGANIZATION
# Function
def status_code_meaning(number)
    if number == 200
        return "OK"
    elsif number == 301
        return "Moved Permanently"
    elsif number == 401
        return "Unauthorized"
    elsif number == 404
        return "Not Found"
    elsif number == 500
        return "Internal Server Error"
    else
        return "Unknown"
    end
end
# Hash table
STATUS_CODES = {
    200 => "OK",
    301 => "Moved Permanently",
    401 => "Unauthorized",
    404 => "Not Found",
    500 => "Internal Server Error"
}

def status_code_meaning2(number)
    return STATUS_CODES[number]
end

arr = [1,2,3,4,5]

hash_talbe = {
    1 => true,
    2 => true,
    3 => true,
    4 => true,
    5 => true
}

put(hash_table[1])
