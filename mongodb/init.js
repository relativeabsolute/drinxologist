conn = new Mongo();
db = conn.getDB('drinxologist');

db.createCollection('liquors', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [ 'name', 'type' ],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                type: {
                    bsonType: 'object',
                    required: [ 'name', 'subtype' ],
                    properties: {
                        name: {
                            bsonType: 'string',
                            description: 'must be a string and is required'
                        },
                        subtype: {
                            bsonType: 'string',
                            description: 'must be a string and is required'
                        }
                    }
                }
            }
        }
    }
});