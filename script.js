$(() => {
    const menu = $('#menu')
    let cross = $('#cross')
    let ham = $('#ham')
    let items = $('#items')
    // items.hide()
    cross.hide()

    ham.click(function () {
        ham.hide()
        cross.show()
        items.slideToggle(400)
    })

    cross.click(function () {
        cross.hide()
        ham.show()
        items.slideToggle(400)
})

if ($(window).width() > 600) {
    ham.hide()
    menu.append(items)
    items.css('flex-direction', 'row')
    $('#items > li').css({
        borderRadius: '5px',
        margin: '0 10px'
    })
}
else {
    items.hide()
}


$(window).resize(function () {
    if ($(window).width() > 600) {
        ham.hide()
        cross.hide()
        items.show()
        menu.append(items)
        items.css({
            flexDirection: 'row'
        })
        $('#items > li').css({
            borderRadius: '5px',
            margin: '0 10px'
        })
    }
    else {
        $('body').append(items)
        ham.show()
        items.hide()
        items.css({
            flexDirection: 'column'
        })

    }
})




})