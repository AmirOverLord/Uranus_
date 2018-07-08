const config = {
    secret_key: 'tunAgAjErEkuCrEstawe#aKUwesa3R',
    app_key: 's8ubAspawehU@ete$Reza!rApep3_m',
    game: {
        connection: {
            server: '127.0.0.1',
			userName: 'user',
            password: 'pass'
        },
        db: {
            auth: 'Auth',
            arcadia: 'Arcadia',
            billing: 'Billing',
            telecaster: 'Telecaster',
            arcadiaInfo: 'ArcadiaInfo',
            site: 'Site'
        },
        auth_bin: {
          ip: '127.0.0.1',
          port: 4422
        },
        game_bin: {
            ip: '127.0.0.1',
            port: 4423
        },
        patch_bin: {
            ip: '127.0.0.1',
            port: 3516
        },
        telnet: {
            ip: '127.0.0.1',
            port: 5574,
            username: '',
            password: ''
        },
        md5_key: 2011
    },
    web_db: 'mongodb://localhost/db',
    log: {
         status: false,  // false : disable , true : active.
         auto_delete: false // true : delete older record from DB, false : disable auto delete.
    },
    permission: {
        player: 0,
        ga: 50,
        gm: 70,
        Admin: 100
    }
};

export default config;