import CryptoJS from 'crypto-js'

export const sha256File = 
    (file, onProgress, chunkSize = 1024 * 1024, reader = undefined, hasher = undefined) => {
        if (reader === undefined) {
            // on initial
            return new Promise((resolve, reject) => {
                hasher = CryptoJS.algo.SHA256.create()
                reader = new FileReader()
                reader.size = chunkSize
                reader.offset = 0
                reader.index = 0
                reader.onload = function (event) {
                    hasher.update(CryptoJS.lib.WordArray.create(event.target.result))
                    sha256File(file, onProgress, chunkSize, this, hasher)
                        .then((hash) => {
                            resolve(hash)
                        })
                        .catch(reject)
                }
                var partial = file.slice(reader.offset, reader.offset + reader.size)
                reader.readAsArrayBuffer(partial)
            })
        } else {
            if (reader.offset + reader.size < file.size) {
                // on progress
                return new Promise((resolve, reject) => {
                    reader.offset += chunkSize
                    reader.index += 1
                    reader.onload = function (event) {
                        hasher.update(CryptoJS.lib.WordArray.create(event.target.result))
                        const progress = ((reader.offset + reader.size) / file.size) * 100
                        onProgress(progress.toFixed(0))
                        sha256File(file, onProgress, chunkSize, this, hasher)
                            .then((hash) => {
                                resolve(hash)
                            })
                            .catch(reject)
                    }
                    var partial = file.slice(reader.offset, reader.offset + reader.size)
                    reader.readAsArrayBuffer(partial)
                })
            } else {
                // on final
                return new Promise((resolve, reject) => {
                    onProgress(100)
                    resolve(hasher.finalize().toString())
                })
            }
        }
    }