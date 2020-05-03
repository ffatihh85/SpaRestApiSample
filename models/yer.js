var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gezilecekYerler');
mongoose.set('debug',true);

mongoose.Promise = Promise;

var yerSchmea = new mongoose.Schema({
    isim:{
        type:String,
        required: 'Yer ismi bos olamaz'
    },
    ziyaret:{
        type: Boolean,
        default:false
    },
    olusturulmaTarihi:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Yer', yerSchmea);