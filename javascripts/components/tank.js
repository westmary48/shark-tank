import util from '../helpers/utils.js';
import personData from '../helpers/data/personData.js'

const tankBuilder = () => {
  const persons = personData.getAlivePersons();
  let domstring = '';
  domstring += '<div class="card">'
  domstring += '<div class="card-header">Feature</div>'
  domstring += '<ul class="list-group list-group-flush">'
  domstring += '<li class="list-group-item">Cras justo odio</li>'
  domstring += '<li class="list-group-item">Dapibus ac facilisis in</li>'

  persons.forEach((person) => {
  domstring += `<li class="list-group-item">${person.name}</li>`

  });
  domstring += '</ul>'
  domstring += '</div>'
  util.printToDom('tank', domstring)
};

export default { tankBuilder }