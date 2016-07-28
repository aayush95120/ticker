# # THIS WORKS

newClickEvent = () ->
  $('#loan-test').click (event) ->
    event.preventDefault()
    $('#new-section').fadeToggle()
    return false

$(newClickEvent)



# $(document).ready(newClickEvent)
# # --------------------------------

# $(document).on "page:load", ->
#   $('#new-link').css("background", "yellow")
#   $('#new-link').click ->
#     alert "Clicked!"


# ready = ->
#   $('#new-link').click ->
#     $('#new-section').fadeToggle()
# $(document).ready(ready)
# $(document).on('page:load', ready)



# $(document).on "page:change", ->
