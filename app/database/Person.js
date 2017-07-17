import Realm from 'realm';
class Person extends Realm.Object { }

Person.schema = {
  name: 'Person',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
  },

};
class ID extends Realm.Object { }
ID.schema = {
  name: 'ID',
  primaryKey: 'key',
  properties: {
    key: 'string',
    id: 'int',

  },

};




let realm = new Realm({ schema: [Person, ID] });

export function getPersonList() {
  return realm.objects('Person');
}
export function initPersonDatabase() {

  if (realm.objects('Person').length == 0) {
    realm.write(() => {
      realm.create('ID', {
        key: 'ID',
        id: 0

      });
    });
    console.log("init");
  }
  console.log("not init");
}

export function createPerson(_name, _phone) {
  var currentID = realm.objects('ID');


  _id = currentID[0].id + 1;
  console.log("_ID" + _id)
  var s = realm.write(() => {
    realm.create('Person', {
      id: _id,
      name: _name,
    });
  });

  realm.write(() => {
    realm.create('ID', {
      key: 'ID',
      id: _id
    },
      true
    );
  });



}
export function deleteAllPerson() {
  let persons = realm.object('Person');
  realm.delete(persons);
}
