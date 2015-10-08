# NewsletterSignUp
jQuery/Ajax


[x] 1. Form takes user email
[ ] 2. Guard against multiple submit button presses
[x] 3. Set submit button to grey until user enters a valid email
[ ] 4. Set submit button to blue when user has entered a valid email
[ ] 5. show loading graphic when waiting for the API
[ ] 6. Handle error responses from API with an error message
[ ] 7. Handle success responses from API with a ‘thank you’ message

API endpoint:
type: 'POST',
    url: 'https://protected-lake-8698.herokuapp.com/api/subscribe',

data format:

{
email: blah@blah.com
}