$(document).ready(
    () => {
        //update preview window with user input text from textarea
        $('#text')
        .on('keyup', ({currentTarget}) => {
            $('.preview').html(
                $(currentTarget).val()
            )
        })

        //update preview window with user selected font style rules
        $('#font')
        .on('change', ({currentTarget}) => {
            $('.preview').css(
                'font-family', $(currentTarget).val()
            )
        })

        $('#weight')
        .on('change', ({currentTarget}) => {
            $('.preview').css(
                'font-weight', $(currentTarget).val()
            )
        })

        $('#size')
        .on('keyup', ({currentTarget}) => {
            $('.preview').css(
                'font-size', `${ $(currentTarget).val() }px`
            )
        })
    }
)