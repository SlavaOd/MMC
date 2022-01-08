var btn = document.querySelector('.btn'),
    parents = document.querySelector('.parents'),
    parents_int = document.querySelector('.parents_int'),
    start = document.querySelector('.start'),
    choice = document.querySelector('.choice'),
    optimum = document.querySelector('.optimum'),
    komfort = document.querySelector('.komfort'),
    bezlim = document.querySelector('.bezlim'),
    all = document.querySelector('.all'),
    sell_par = document.querySelector('.sell_par'),
    sell_par_int = document.querySelector('.sell_par_int'),
    sell_start = document.querySelector('.sell_start'),
    sell_choice = document.querySelector('.sell_choice'),
    sell_optimum = document.querySelector('.sell_optimum'),
    sell_komfort = document.querySelector('.sell_komfort'),
    sell_bezlim = document.querySelector('.sell_bezlim'),
    sell_all = document.querySelector('.sell_all'),
    month_par = document.querySelector('.month_par'),
    month_par_int = document.querySelector('.month_par_int'),
    month_start = document.querySelector('.month_start'),
    month_choice = document.querySelector('.month_choice'),
    month_optimum = document.querySelector('.month_optimum'),
    month_komfort = document.querySelector('.month_komfort'),
    month_bezlim = document.querySelector('.month_bezlim'),
    month_all = document.querySelector('.month_all'),
    six_par = document.querySelector('.six_par'),
    six_par_int = document.querySelector('.six_par_int'),
    six_start = document.querySelector('.six_start'),
    six_choice = document.querySelector('.six_choice'),
    six_optimum = document.querySelector('.six_optimum'),
    six_komfort = document.querySelector('.six_komfort'),
    six_bezlim = document.querySelector('.six_bezlim'),
    six_all = document.querySelector('.six_all'),
    res = document.querySelector('.res'),
    reg = document.querySelector('.reg'),
    clos = document.querySelector('.close'),
    about = document.querySelector('.about'),
    nkp = document.querySelector('.nkp')

btn.onclick = function() {
    all.value = +btn.value + +parents.value + +parents_int.value + +start.value + +optimum.value + +choice.value + +komfort.value + +bezlim.value
    sell_par.value = +parents.value *75
    sell_par_int.value = +parents_int.value *100
    sell_start.value = +start.value *100
    sell_choice.value = +choice.value *100
    sell_optimum.value = +optimum.value *150
    sell_komfort.value = +komfort.value *150
    sell_bezlim.value = +bezlim.value *500
    sell_all.value = +sell_par.value + +sell_par_int.value + +sell_start.value + +sell_choice.value + +sell_optimum.value + +sell_komfort.value
    month_par.value = +parents.value * 18.75 
    month_par_int.value = +parents_int.value * 25
    month_start.value = +start.value * 33.75
    month_choice.value = +choice.value * 43.75
    month_optimum.value = +optimum.value * 62.5
    month_komfort.value = +komfort.value * 87.5
    month_bezlim.value = +bezlim.value * 125
    month_all.value = +month_par.value + +month_par_int.value + +month_start.value + +month_choice.value + +month_optimum.value + +month_komfort.value
    six_par.value = +month_par.value * 5
    six_par_int.value = +month_par_int.value * 5
    six_start.value = +month_start.value * 5
    six_choice.value = +month_choice.value * 5
    six_optimum.value = +month_optimum.value * 5
    six_komfort.value = +month_komfort.value * 5
    six_bezlim.value = +month_bezlim.value * 5
    six_all.value = +six_par.value + +six_par_int.value + +six_start.value + +six_choice.value + +six_optimum.value + +six_komfort.value + +six_bezlim.value
    reg.value = six_all.value/30
}

res.onclick = function() {
    location.reload()
}

clos.onclick = function() {
    about.style.display = 'none'
}
nkp.onclick = function() {
    about.style.display = 'block'
}
