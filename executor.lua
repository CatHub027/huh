function execute()
    local code = document.getElementById("code").value
    load(code)()
end

function clearCode()
    document.getElementById("code").value = ""
end
