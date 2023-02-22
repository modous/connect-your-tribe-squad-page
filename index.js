// Importeer express uit de node_modules map
import express, { response } from 'express'

const url = "https://whois.fdnd.nl/api/v1/squad/";
const data = await fetch(url)

.then((response) => response.json())
.catch((error) => error)



console.log(data)
// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
    let slug = req.query.squad || "squad-b-2022";
    let orderBy = req.query.orderBy || "name";
    let squadUrl = url + slug + "?orderBy=" + orderBy + "&direction=ASC";


  // res.send('Hello World!')
  res.render('index', data)
})

//maakt een route naar de about pagina
app.get('/about', function (req, res) {
  // res.send('Hello World!') 
  res.render('about', data)
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
