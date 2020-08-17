'use strict';
const response = require('./restAPI');
const koneksi = require('./coneksi');
exports.index = function(req , res){
    response.ok('Aplikasi running' , res);
};
exports.tampil = function(req , res){
    koneksi.query("SELECT * FROM mahasiswa" , function(err , rows , fileds){
        if(err){
            console.log(err);
        }else{
            response.ok(rows , res);
        }
    })
}
exports.tampilid = function(req , res){
    let id = req.params.id;
    koneksi.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ? ", [id] , function(err , rows , fileds){
        if(err){
            console.log(err);
        }else{
            response.ok(rows , res);
        }
    })
}
exports.input = function(req , res){
    let nama = req.body.nama;
    let nim = req.body.nim;
    let jurusan = req.body.jurusan;
    koneksi.query("INSERT INTO mahasiswa VALUES(?,?,?,?)",[null,nama,nim,jurusan] , function(err , rows , fileds){
        if(err){
            console.log(err);
        }else{
            response.ok("Berhasil Menambahkan Data" ,res);
        }
    })
}
exports.hapus = function(req , res){
    let id =  req.body.id;
    koneksi.query("DELETE FROM mahasiswa WHERE id_mahasiswa = ?", [id] , function(err, rows, filed){
        if(err){
            console.log(err);
        }else{
            response.ok("Data Berhasil di Hapus!" ,res);
        }
    })
}
exports.ubah = function(req , res){
    let id = req.body.id;
    let nama = req.body.nama;
    let nim = req.body.nim;
    let jurusan= req.body.jurusan;
    koneksi.query("UPDATE mahasiswa SET nama = ? , nim = ? , jurusan = ? WHERE id_mahasiswa = ? " , [nama, nim , jurusan , id] , function(err , rows , fileds){
        if(err){
            console.log(err);
        }else{
            response.ok('Data Berhasil di Ubah!' , res);
        }
    })
}