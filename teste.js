const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('banco.json')
const db = lowdb(adapter)

db
  .defaults({
    noticias: [],
    usuarios: []
  })
  .write()

db
  .get('noticias')
  .push({
    id: '1',
    assunto: 'crime',
    conteudo: 'teste'
  })
  .write()

db
  .set('settings.toggledOption', true)
  .write()

const n = db
  .get('noticias')
  .find({ id: '1' })
  .value()

console.log(n)