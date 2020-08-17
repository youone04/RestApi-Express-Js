'use strict';

module.exports =function(app){ //routes ini di impor ke server
    let jsonku = require('./controller');
    app.route('/').get(jsonku.index);
    // tampilkan semua data mahasiswa
    app.route('/tampil').get(jsonku.tampil);
    // menampilkan data berdasarkan id
    app.route('/tampil/:id').get(jsonku.tampilid);
    //input data
    app.route('/input').post(jsonku.input);
    // hapus data mahasiswa
    app.route('/hapus').delete(jsonku.hapus);
    // ubah data
    app.route('/ubah').put(jsonku.ubah);
}