let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

// makeFakeslides()
// init()
// bindEvents()

$('#buttonWrapper').on('click', 'button', function(e) {
    let $button = $(e.currentTarget)
    console.log(e.currentTarget)
    let index = $button.index()
    $slides.css({ transform: `translateX(${-(index)*800}px)` })
})