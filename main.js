var btn = document.querySelector('.btn'),
    parents = document.querySelector('.parents'),
    parents_int = document.querySelector('.parents_int'),
    smart = document.querySelector('.smart'),
    smart_plus = document.querySelector('.smart_plus'),
    smart_max = document.querySelector('.smart_max'),
    all = document.querySelector('.all'),
    sell_par = document.querySelector('.sell_par'),
    sell_par_int = document.querySelector('.sell_par_int'),
    sell_smart = document.querySelector('.sell_smart'),
    sell_smart_plus = document.querySelector('.sell_smart_plus'),
    sell_smart_max = document.querySelector('.sell_smart_max'),
    sell_all = document.querySelector('.sell_all'),
    month_par = document.querySelector('.month_par'),
    month_par_int = document.querySelector('.month_par_int'),
    month_smart = document.querySelector('.month_smart'),
    month_plus = document.querySelector('.month_plus'),
    month_max = document.querySelector('.month_max'),
    month_all = document.querySelector('.month_all'),
    six_par = document.querySelector('.six_par'),
    six_par_int = document.querySelector('.six_par_int'),
    six_smart = document.querySelector('.six_smart'),
    six_plus = document.querySelector('.six_plus'),
    six_max = document.querySelector('.six_max'),
    six_all = document.querySelector('.six_all'),
    res = document.querySelector('.res')

btn.onclick = function() {
    all.value = +btn.value + +parents.value + +parents_int.value + +smart.value + +smart_max.value + +smart_plus.value
    sell_par.value = +parents.value *75
    sell_par_int.value = +parents_int.value *100
    sell_smart.value = +smart.value *100
    sell_smart_plus.value = +smart_plus.value *100
    sell_smart_max.value = +smart_max.value *100
    sell_all.value = +sell_par.value + +sell_par_int.value + +sell_smart.value + +sell_smart_plus.value + +sell_smart_max.value
    month_par.value = +parents.value * 18.75 
    month_par_int.value = +parents_int.value * 25
    month_smart.value = +smart.value * 37.5
    month_plus.value = +smart_plus.value * 56.25
    month_max.value = +smart_max.value * 75
    month_all.value = +month_par.value + +month_par_int.value + +month_smart.value + +month_plus.value + +month_max.value
    six_par.value = +month_par.value * 6
    six_par_int.value = +month_par_int.value * 6
    six_smart.value = +month_smart.value * 6
    six_plus.value = +month_plus.value * 6
    six_max.value = +month_max.value * 6
    six_all.value = +six_par.value + +six_par_int.value + +six_smart.value + +six_plus.value + +six_max.value

}

res.onclick = function() {
    location.reload()
}