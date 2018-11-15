const Random = require('mockjs').Random;

module.exports = (main, child, min, max) => {
  if ( main === 'number' ) {
    min = min ? min : 1;
    max = max ? max : 10;
    switch ( child ) {
      case 'integer':
        return Random.integer(min, max);
      case 'natural':
        return Random.natural(min, max);
      case 'float':
        return Random.float(min, max);
      default:
        return Random.natural(min, max);
    }
  } else if ( main === 'text' ) {
    min = min ? min : 1;
    max = max ? max : 10;
    switch ( child ) {
      case 'cparagraph':
        return Random.cparagraph(min, max);
      case 'csentence':
        return Random.csentence(min, max);
      case 'cword':
        return Random.cword(min, max);
      case 'ctitle':
        return Random.ctitle(min, max);
      case 'paragraph':
        return Random.paragraph(min, max);
      case 'sentence':
        return Random.sentence(min, max);
      case 'word':
        return Random.word(min, max);
      case 'title':
        return Random.title(min, max);
      default:
        return Random.cparagraph(min, max);
    }
  } else if ( main === 'object' ) {
    return { 'key': 'value' }
  } else if ( main === 'array' ) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9]
  } else if ( main === 'date' ) {
    switch ( child ) {
      case 'date':
        return Random.date();
      case 'time':
        return Random.time();
      case 'datetime':
        return Random.datetime();
      default:
        return Random.date();
    }

  } else if ( main === 'web' ) {
    switch ( child ) {
      case 'url':
        return Random.url();
      case 'protocol':
        return Random.protocol();
      case 'tld':
        return Random.tld();
      case 'email':
        return Random.email();
      case 'ip':
        return Random.ip();
      default:
        return Random.url();
    }

  } else if ( main === 'image' ) {
    switch ( child ) {
      case 'image':
        return Random.image();
      case 'dataImage':
        return Random.dataImage();
      default:
        return Random.image();
    }
  } else if ( main === 'boolean' ) {
    return Math.random() > 0.5
  } else if ( main === 'color' ) {
    switch ( child ) {
      case 'hex':
        return Random.hex();
      case 'rgb':
        return Random.rgb();
      case 'rgba':
        return Random.rgba();
      case 'hsl':
        return Random.hsl();
      default:
        return Random.hex();
    }
  } else if ( main === 'id' ) {
    switch ( child ) {
      case 'guid':
        return Random.guid();
      case 'id':
        return Random.id();
      default:
        return Random.guid();
    }
  } else if ( main === 'name' ) {
    switch ( child ) {
      case 'first':
        return Random.first();
      case 'last':
        return Random.last();
      case 'name':
        return Random.name();
      case 'cfirst':
        return Random.cfirst();
      case 'clast':
        return Random.clast();
      case 'cname':
        return Random.cname();
      default:
        return Random.first();
    }
  } else if ( main === 'address' ) {
    switch ( child ) {
      case 'region':
        return Random.region();
      case 'province':
        return Random.province();
      case 'city':
        return Random.city();
      case 'county':
        return Random.county();
      case 'zip':
        return Random.zip();
      default:
        return Random.region();
    }
  }
}
