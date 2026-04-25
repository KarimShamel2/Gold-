const PRODUCTS = {
    'ring1': {
        title: 'Eternal Solstice Ring',
        price: '$4,850',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBh1zcHPtRf_DNAPvDbaYIQmCm6nIm5q-6F-SMq9zURUwS7gPUzzjdkP0Sy-2mFhkv-Pfrd_dsyr-i8Wj9dmJPZa6ZCmuVC9KDx3YRbSsvQffT93Jb55YWlRe9NUsT30DH94nGS_H0TF3MTpxa0FpyjtVzbrTLFWTi5JVotel44ojE6koIFy5qB0HkYCETTmJwRyH6kodAO_G5l9hY_7R9rzRKwMKunDDvl-RjaVlZsV8XdvyPb5Up8oXROSIYqJ8uF0co3D3Mp_jU',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAtLi3_8paiUuwrCu2u4BcoTJRIi_j3NJKw78oGkWj6DLscnGccAlQWDslVCLNXHyMU-_wtpdQP3eLNpYeJ0OnZVO3era0W-gpW1np1jIA_yDGfbGkAnk1F-3ZgE3B2ZbSDyE13H87_mkKnXQ5rvw0F0W-whji9y5fa3Rgut9PgOojn4mNzeTat5QHsAnbEdm1ueFfKraavzbc3vp73E4Pc0Q9ocd2fPIVU3ckzxdqQGKe0lb-QnOVsQd-0SM-QbIQkunFwxPW_yxo',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBzzBGUHift7eEL1U2myRH1C4Ky7LvrnXFnNHrM5gWMj2tzijH4leAN2aub8UnS1O1U_wwceLPnFZHyZA-mWphgrl7sZvCExbxfCMoD8KNPlLcyJmA6dzkEhvxzZIbaMriOzYYlGcaBAZZcryghylsNvPBfFrhhGjshWxqI94VEMjOTEvb89odaf5VS7y3ZVXKEugpO--miCAkfcMCJgVkWUX_Ghusp23wf64fr113WTsa6-2EuRrIXImd1gx7gPuSwgVns06PpJYE'
        ]
    },
    'earrings1': {
        title: 'Lucent Drop Earrings',
        price: '$2,200',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC-F0AwHXOuIrXMNRv1jzmWuIfptu46hrZn3pTGtTk2GghgzXeZdQdZl-P3uNJzL3o1nDQ7GKFfsAdG8vcFk5yv4NXR1UnmR2wPzCYKzAyQIMAMNIqz0eX4Xn7oMNptUGdtv2SWAP2wkKc4KNvyEbcWorleMyud-uJRY_0gJV7v9j34qoC1-UpvUqs8QTKPDe0ugd6qlT5w7hSeoP9HEh72UscnZBy-8fCUwLfvpl4ccmLHZ4vdQRHpcXt2sAMUr4RHBaUxOQ968FI',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC-F0AwHXOuIrXMNRv1jzmWuIfptu46hrZn3pTGtTk2GghgzXeZdQdZl-P3uNJzL3o1nDQ7GKFfsAdG8vcFk5yv4NXR1UnmR2wPzCYKzAyQIMAMNIqz0eX4Xn7oMNptUGdtv2SWAP2wkKc4KNvyEbcWorleMyud-uJRY_0gJV7v9j34qoC1-UpvUqs8QTKPDe0ugd6qlT5w7hSeoP9HEh72UscnZBy-8fCUwLfvpl4ccmLHZ4vdQRHpcXt2sAMUr4RHBaUxOQ968FI',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC-F0AwHXOuIrXMNRv1jzmWuIfptu46hrZn3pTGtTk2GghgzXeZdQdZl-P3uNJzL3o1nDQ7GKFfsAdG8vcFk5yv4NXR1UnmR2wPzCYKzAyQIMAMNIqz0eX4Xn7oMNptUGdtv2SWAP2wkKc4KNvyEbcWorleMyud-uJRY_0gJV7v9j34qoC1-UpvUqs8QTKPDe0ugd6qlT5w7hSeoP9HEh72UscnZBy-8fCUwLfvpl4ccmLHZ4vdQRHpcXt2sAMUr4RHBaUxOQ968FI'
        ]
    },
    'choker1': {
        title: 'Elysian Gold Choker',
        price: '$2,450',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAGavLoHXlaiYaUhYZtxwCsjsOmV_v-agwuUEPGPD4bj2iMytEEFEzf-Q88NdmIV_S8oG7QjYmcJX5fk2rpPvqtB7qw69rGXjr7Dfd7OOvAej_JtM_sCb6z_LXlPhz2U3TnqSWHwAK5zBkVNgyiaEBy51W_VwIcYP8db7tvnVZRkTwODEPIGEEHtFjONeb3BjIKKk59ESQUTK_8ai4hLAvKYapFnm53BRb-kK0OH25wDVjniW-gNZlaLgC4sAIpV5GmHH8DyYSFlCU',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAGavLoHXlaiYaUhYZtxwCsjsOmV_v-agwuUEPGPD4bj2iMytEEFEzf-Q88NdmIV_S8oG7QjYmcJX5fk2rpPvqtB7qw69rGXjr7Dfd7OOvAej_JtM_sCb6z_LXlPhz2U3TnqSWHwAK5zBkVNgyiaEBy51W_VwIcYP8db7tvnVZRkTwODEPIGEEHtFjONeb3BjIKKk59ESQUTK_8ai4hLAvKYapFnm53BRb-kK0OH25wDVjniW-gNZlaLgC4sAIpV5GmHH8DyYSFlCU',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAGavLoHXlaiYaUhYZtxwCsjsOmV_v-agwuUEPGPD4bj2iMytEEFEzf-Q88NdmIV_S8oG7QjYmcJX5fk2rpPvqtB7qw69rGXjr7Dfd7OOvAej_JtM_sCb6z_LXlPhz2U3TnqSWHwAK5zBkVNgyiaEBy51W_VwIcYP8db7tvnVZRkTwODEPIGEEHtFjONeb3BjIKKk59ESQUTK_8ai4hLAvKYapFnm53BRb-kK0OH25wDVjniW-gNZlaLgC4sAIpV5GmHH8DyYSFlCU'
        ]
    },
    'hoops1': {
        title: 'Onyx Horizon Hoops',
        price: '$1,200',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDwY9q0cSD4XD3_6VJ7Qj3Gww5nl7fzwYEiExeS-NQKGTqxe-bjGCwv2SybweKNf_cZeaqAyzG83zHTvJpIoN3RlB3bzcwZ7zqH6o96au4Cj36bjd3DzLDlgDked9sfrCn7gw2XR1tPdYY3Eb8Eog9MnSaP95KnE-ufd9OvxSaL2kBfd7crVOQV9AYMRTkEjFZeTyesgwNHErRcUj_hvuzx9Ja-0njI42AzjPJBOC-e0x05Q-YOrXuymy-b8oscOnXFRarjtdbcHTc',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDwY9q0cSD4XD3_6VJ7Qj3Gww5nl7fzwYEiExeS-NQKGTqxe-bjGCwv2SybweKNf_cZeaqAyzG83zHTvJpIoN3RlB3bzcwZ7zqH6o96au4Cj36bjd3DzLDlgDked9sfrCn7gw2XR1tPdYY3Eb8Eog9MnSaP95KnE-ufd9OvxSaL2kBfd7crVOQV9AYMRTkEjFZeTyesgwNHErRcUj_hvuzx9Ja-0njI42AzjPJBOC-e0x05Q-YOrXuymy-b8oscOnXFRarjtdbcHTc',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDwY9q0cSD4XD3_6VJ7Qj3Gww5nl7fzwYEiExeS-NQKGTqxe-bjGCwv2SybweKNf_cZeaqAyzG83zHTvJpIoN3RlB3bzcwZ7zqH6o96au4Cj36bjd3DzLDlgDked9sfrCn7gw2XR1tPdYY3Eb8Eog9MnSaP95KnE-ufd9OvxSaL2kBfd7crVOQV9AYMRTkEjFZeTyesgwNHErRcUj_hvuzx9Ja-0njI42AzjPJBOC-e0x05Q-YOrXuymy-b8oscOnXFRarjtdbcHTc'
        ]
    },
    'cuff1': {
        title: 'Aurelia Signature Cuff',
        price: '$3,900',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC-P9wLmulyw83XQtFAoXrBlczVmpEcLn2HwY4p0ot_B1fcjgRLs5t2KkAaPHGfReHYgp3B82TfyCTTQe_v7NIOp7PFz7idssFtQfgiJNLZO4kU90Pr4zrTBIICxbMY766UFqkclXaHO1ul3yVNx3PeVRqcKv99lzXZQhyzkXorK_hN5YxSPX1Sq3e8oYWmgRbzNFCLIMDTt-3uwtyxmMR7frwH13FJthgaBhyYuJPs0AiL4pmwMMqUBmVlUAN8qoordLHnugYYKmo',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC-P9wLmulyw83XQtFAoXrBlczVmpEcLn2HwY4p0ot_B1fcjgRLs5t2KkAaPHGfReHYgp3B82TfyCTTQe_v7NIOp7PFz7idssFtQfgiJNLZO4kU90Pr4zrTBIICxbMY766UFqkclXaHO1ul3yVNx3PeVRqcKv99lzXZQhyzkXorK_hN5YxSPX1Sq3e8oYWmgRbzNFCLIMDTt-3uwtyxmMR7frwH13FJthgaBhyYuJPs0AiL4pmwMMqUBmVlUAN8qoordLHnugYYKmo',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC-P9wLmulyw83XQtFAoXrBlczVmpEcLn2HwY4p0ot_B1fcjgRLs5t2KkAaPHGfReHYgp3B82TfyCTTQe_v7NIOp7PFz7idssFtQfgiJNLZO4kU90Pr4zrTBIICxbMY766UFqkclXaHO1ul3yVNx3PeVRqcKv99lzXZQhyzkXorK_hN5YxSPX1Sq3e8oYWmgRbzNFCLIMDTt-3uwtyxmMR7frwH13FJthgaBhyYuJPs0AiL4pmwMMqUBmVlUAN8qoordLHnugYYKmo'
        ]
    },
    'drops1': {
        title: 'Verdant Muse Drops',
        price: '$8,600',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB7S1J3eerzo1MXxLCXpK4a2eKHDN5h5KUyfvddXIDHKvZKM9vOHzpV70PdWT9JgOldSe3LiEQUIx4PbtHlTnf1fOhifU-ZuUYprfAft9Iz5TB9J4okIyVf_SpPva5FjDG7BAmnx8jEL1ta0qDg3wJO_WVXtJzYqSCKa1abSitDufAQ6rIizCKK-NPfTSJN63e5d50pjXGW8PBCFp2qQtOlolvK_fLi9VLb8T6rdWzURGkSeNHlNcissWbp-4KoMyvVwajncXL7zZw',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB7S1J3eerzo1MXxLCXpK4a2eKHDN5h5KUyfvddXIDHKvZKM9vOHzpV70PdWT9JgOldSe3LiEQUIx4PbtHlTnf1fOhifU-ZuUYprfAft9Iz5TB9J4okIyVf_SpPva5FjDG7BAmnx8jEL1ta0qDg3wJO_WVXtJzYqSCKa1abSitDufAQ6rIizCKK-NPfTSJN63e5d50pjXGW8PBCFp2qQtOlolvK_fLi9VLb8T6rdWzURGkSeNHlNcissWbp-4KoMyvVwajncXL7zZw',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB7S1J3eerzo1MXxLCXpK4a2eKHDN5h5KUyfvddXIDHKvZKM9vOHzpV70PdWT9JgOldSe3LiEQUIx4PbtHlTnf1fOhifU-ZuUYprfAft9Iz5TB9J4okIyVf_SpPva5FjDG7BAmnx8jEL1ta0qDg3wJO_WVXtJzYqSCKa1abSitDufAQ6rIizCKK-NPfTSJN63e5d50pjXGW8PBCFp2qQtOlolvK_fLi9VLb8T6rdWzURGkSeNHlNcissWbp-4KoMyvVwajncXL7zZw'
        ]
    },
    'strand1': {
        title: 'Lunar Pearl Strand',
        price: '$5,200',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDCIbSIswG44ysRZuumqCV3W1jzzjqbjS9bKKCGOG0qmkUmTcM9noX8Eo7LCdk2P-QF5jwo_ItDkFRp3AAhR1llvZH_W2iGP_qiEUzmSYssmZB6mlJA68_jXO_atNcLpQB49Q53uAmOhjwabXvHdEz7RKezxrfuaIHvKYgQ_uCnviIwm2MUN_1GL9noWKgrAEt24TKofINPA0b9P75QgN_u63el_6BQe7jqsg6JxwWNrDiNSjHZmcj1l-lriEkV8SkR5EXxI5xLJZs',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDCIbSIswG44ysRZuumqCV3W1jzzjqbjS9bKKCGOG0qmkUmTcM9noX8Eo7LCdk2P-QF5jwo_ItDkFRp3AAhR1llvZH_W2iGP_qiEUzmSYssmZB6mlJA68_jXO_atNcLpQB49Q53uAmOhjwabXvHdEz7RKezxrfuaIHvKYgQ_uCnviIwm2MUN_1GL9noWKgrAEt24TKofINPA0b9P75QgN_u63el_6BQe7jqsg6JxwWNrDiNSjHZmcj1l-lriEkV8SkR5EXxI5xLJZs',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDCIbSIswG44ysRZuumqCV3W1jzzjqbjS9bKKCGOG0qmkUmTcM9noX8Eo7LCdk2P-QF5jwo_ItDkFRp3AAhR1llvZH_W2iGP_qiEUzmSYssmZB6mlJA68_jXO_atNcLpQB49Q53uAmOhjwabXvHdEz7RKezxrfuaIHvKYgQ_uCnviIwm2MUN_1GL9noWKgrAEt24TKofINPA0b9P75QgN_u63el_6BQe7jqsg6JxwWNrDiNSjHZmcj1l-lriEkV8SkR5EXxI5xLJZs'
        ]
    },
    'pendant1': {
        title: 'Midnight Bloom Pendant',
        price: '$6,400',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBG1lePtuPu7py-C8nmRqQ1F7-J9hCOeKPgkDmE35-tkw-vdPbK73Be-JsdcpiXNRdz_FL2kD26ucqMbcbVmVE5Rfok7SnokW57BCmavc58huBfzMstx56zQG1AtchxDeyrA5Tdhun3mydcPU9fcmyNMtceMxG71xN8mByzW99KMzYtGaTo3MH7M6ilg0LsJlLaoyE8zf9bK-Sr-txrWPsXSXrTpQWNsgtugeclW3T201AhFPxAk3mZyHNHKhXZ8qB6N51qcJBk9CE',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBG1lePtuPu7py-C8nmRqQ1F7-J9hCOeKPgkDmE35-tkw-vdPbK73Be-JsdcpiXNRdz_FL2kD26ucqMbcbVmVE5Rfok7SnokW57BCmavc58huBfzMstx56zQG1AtchxDeyrA5Tdhun3mydcPU9fcmyNMtceMxG71xN8mByzW99KMzYtGaTo3MH7M6ilg0LsJlLaoyE8zf9bK-Sr-txrWPsXSXrTpQWNsgtugeclW3T201AhFPxAk3mZyHNHKhXZ8qB6N51qcJBk9CE',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBG1lePtuPu7py-C8nmRqQ1F7-J9hCOeKPgkDmE35-tkw-vdPbK73Be-JsdcpiXNRdz_FL2kD26ucqMbcbVmVE5Rfok7SnokW57BCmavc58huBfzMstx56zQG1AtchxDeyrA5Tdhun3mydcPU9fcmyNMtceMxG71xN8mByzW99KMzYtGaTo3MH7M6ilg0LsJlLaoyE8zf9bK-Sr-txrWPsXSXrTpQWNsgtugeclW3T201AhFPxAk3mZyHNHKhXZ8qB6N51qcJBk9CE'
        ]
    },
    'signet1': {
        title: 'Heritage Signet Ring',
        price: '$3,100',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBKgbLoZ1DE6thp0zB6yxf35ahDhGTRHQT7HRF_Gn6zaNKZt95ceQveg4lI1DYDtPUpFrqUABljXXHw47DAV4ezYnKjHH5ug1o4aestsdS1VGSItIf-Rh9qzAoc2230d-uxAVRV_jjLq050APAUIoSMLF0oxuA_X1oeZhtd_HOIZxT_dyNIELHoUXoCWYq4cFeohAR0Pb4XW3OHodQviitxtu1gBNpws5HluW55J_wR0To7yUxKt07-VPhilbNm9T9fCejWCwgk4y8',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBKgbLoZ1DE6thp0zB6yxf35ahDhGTRHQT7HRF_Gn6zaNKZt95ceQveg4lI1DYDtPUpFrqUABljXXHw47DAV4ezYnKjHH5ug1o4aestsdS1VGSItIf-Rh9qzAoc2230d-uxAVRV_jjLq050APAUIoSMLF0oxuA_X1oeZhtd_HOIZxT_dyNIELHoUXoCWYq4cFeohAR0Pb4XW3OHodQviitxtu1gBNpws5HluW55J_wR0To7yUxKt07-VPhilbNm9T9fCejWCwgk4y8',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBKgbLoZ1DE6thp0zB6yxf35ahDhGTRHQT7HRF_Gn6zaNKZt95ceQveg4lI1DYDtPUpFrqUABljXXHw47DAV4ezYnKjHH5ug1o4aestsdS1VGSItIf-Rh9qzAoc2230d-uxAVRV_jjLq050APAUIoSMLF0oxuA_X1oeZhtd_HOIZxT_dyNIELHoUXoCWYq4cFeohAR0Pb4XW3OHodQviitxtu1gBNpws5HluW55J_wR0To7yUxKt07-VPhilbNm9T9fCejWCwgk4y8'
        ]
    },
    'celestial1': {
        title: 'Celestial Dreams',
        price: 'From $2,400',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCXpBiVfsp69IdtaiXLzDMtQ62g0MpjS8kg2MOAhiohm4HaThpwhZsP46xqipmbbqdA3soGqNI0wW3eiOcHLIT6Zgvm0Llf0PEEMhyx2R-13sd5Sgw5TOG-B0XhEb8TnIkthlPRXlhsOpcIIBLCYHHkiObRXYbAGn-a5zWtXvwGcWoimk7aag0fdbj4XswYoW_LD-zgRY3M7-1Zm2MC41R2OA58e35d5dz8zcV-k-TVQX8tPhvP3qTx_kGJV636fn6Rh73nCZkP54c',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCXpBiVfsp69IdtaiXLzDMtQ62g0MpjS8kg2MOAhiohm4HaThpwhZsP46xqipmbbqdA3soGqNI0wW3eiOcHLIT6Zgvm0Llf0PEEMhyx2R-13sd5Sgw5TOG-B0XhEb8TnIkthlPRXlhsOpcIIBLCYHHkiObRXYbAGn-a5zWtXvwGcWoimk7aag0fdbj4XswYoW_LD-zgRY3M7-1Zm2MC41R2OA58e35d5dz8zcV-k-TVQX8tPhvP3qTx_kGJV636fn6Rh73nCZkP54c',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCXpBiVfsp69IdtaiXLzDMtQ62g0MpjS8kg2MOAhiohm4HaThpwhZsP46xqipmbbqdA3soGqNI0wW3eiOcHLIT6Zgvm0Llf0PEEMhyx2R-13sd5Sgw5TOG-B0XhEb8TnIkthlPRXlhsOpcIIBLCYHHkiObRXYbAGn-a5zWtXvwGcWoimk7aag0fdbj4XswYoW_LD-zgRY3M7-1Zm2MC41R2OA58e35d5dz8zcV-k-TVQX8tPhvP3qTx_kGJV636fn6Rh73nCZkP54c'
        ]
    },
    'heritage1': {
        title: 'Heritage Gold',
        price: 'From $3,900',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuADFMoYoWFW0mpxFdjU5ii-SMZ5wa9divL2UNX1eZAtmVm9O4Vn6hmDxbZSCeqgZUYToINXsxV11iP2i2OInq0M_ntw9diI8n234SRLCKEbYb2JIZH1-PhEBhvffZJ-gtlP8IgSBc5u1Yxny4lMDbEhkqHDUFvX9hfZVUJsVGaitSlIKYpjvZFD0ZAG8AnSiFCmJgBdKQcHdQ9Cf8gAXLb6ITyCyze3b1507iKXdQgcjXS_jVtOLWkyg72NC7EXgQ3V5AuMBo6jPzA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuADFMoYoWFW0mpxFdjU5ii-SMZ5wa9divL2UNX1eZAtmVm9O4Vn6hmDxbZSCeqgZUYToINXsxV11iP2i2OInq0M_ntw9diI8n234SRLCKEbYb2JIZH1-PhEBhvffZJ-gtlP8IgSBc5u1Yxny4lMDbEhkqHDUFvX9hfZVUJsVGaitSlIKYpjvZFD0ZAG8AnSiFCmJgBdKQcHdQ9Cf8gAXLb6ITyCyze3b1507iKXdQgcjXS_jVtOLWkyg72NC7EXgQ3V5AuMBo6jPzA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuADFMoYoWFW0mpxFdjU5ii-SMZ5wa9divL2UNX1eZAtmVm9O4Vn6hmDxbZSCeqgZUYToINXsxV11iP2i2OInq0M_ntw9diI8n234SRLCKEbYb2JIZH1-PhEBhvffZJ-gtlP8IgSBc5u1Yxny4lMDbEhkqHDUFvX9hfZVUJsVGaitSlIKYpjvZFD0ZAG8AnSiFCmJgBdKQcHdQ9Cf8gAXLb6ITyCyze3b1507iKXdQgcjXS_jVtOLWkyg72NC7EXgQ3V5AuMBo6jPzA'
        ]
    },
    'oceanic1': {
        title: 'Oceanic Grace',
        price: 'From $1,200',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB8hqImaV8kgpKWTkwncLTgxktjzqBhtHZWsWyGls-M84Y56CbbaK7L6yRBfAAAKXoSUNwZIkBr3zOqc85ELGO0QWEeWabRlsdOVVTCJomtFORmGuoIXl8ulQpWTcMGPrp3iSeIIqHZ0iDHylyLTLeDaQx5jZpWBkurjhTH1wrBA-tI0GSpbOGpjahU1Uc-YGS0XA1IzNqfyg12Ro1y0v2O1ci3THALfkN-hwSwsH9XSUo23l_a-DZntSWlpZLvCCTsS7iLbkqrw_k',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB8hqImaV8kgpKWTkwncLTgxktjzqBhtHZWsWyGls-M84Y56CbbaK7L6yRBfAAAKXoSUNwZIkBr3zOqc85ELGO0QWEeWabRlsdOVVTCJomtFORmGuoIXl8ulQpWTcMGPrp3iSeIIqHZ0iDHylyLTLeDaQx5jZpWBkurjhTH1wrBA-tI0GSpbOGpjahU1Uc-YGS0XA1IzNqfyg12Ro1y0v2O1ci3THALfkN-hwSwsH9XSUo23l_a-DZntSWlpZLvCCTsS7iLbkqrw_k',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB8hqImaV8kgpKWTkwncLTgxktjzqBhtHZWsWyGls-M84Y56CbbaK7L6yRBfAAAKXoSUNwZIkBr3zOqc85ELGO0QWEeWabRlsdOVVTCJomtFORmGuoIXl8ulQpWTcMGPrp3iSeIIqHZ0iDHylyLTLeDaQx5jZpWBkurjhTH1wrBA-tI0GSpbOGpjahU1Uc-YGS0XA1IzNqfyg12Ro1y0v2O1ci3THALfkN-hwSwsH9XSUo23l_a-DZntSWlpZLvCCTsS7iLbkqrw_k'
        ]
    },
    'bangle1': {
        title: 'Odyssey Bangle',
        price: '$3,150',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCkPAKaZJBeD8rHxqJbrRuTcpRKXUjGvE5lnzk688XYrRoXbPcp4-M9yo_2y94LM2mu8AV6VP7XAPAPp_l-6ZKPbMj1f91GgOUt2prz3zE7KCR0jB2jz6FhbqlrRX33bHcOxZk4mGDKBx2wTTIXkbUpve60ZbDfZXxWUY5wvRMbPI0z-Ed8ZMV4naITpmTCl2KkUuWkcZo-W2h-GRwhlU9toSKeQuDzLaW746-S4MK09anbm3guJ8AYbMenJ5Be6ZrULcmeQmtiOQA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCkPAKaZJBeD8rHxqJbrRuTcpRKXUjGvE5lnzk688XYrRoXbPcp4-M9yo_2y94LM2mu8AV6VP7XAPAPp_l-6ZKPbMj1f91GgOUt2prz3zE7KCR0jB2jz6FhbqlrRX33bHcOxZk4mGDKBx2wTTIXkbUpve60ZbDfZXxWUY5wvRMbPI0z-Ed8ZMV4naITpmTCl2KkUuWkcZo-W2h-GRwhlU9toSKeQuDzLaW746-S4MK09anbm3guJ8AYbMenJ5Be6ZrULcmeQmtiOQA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCkPAKaZJBeD8rHxqJbrRuTcpRKXUjGvE5lnzk688XYrRoXbPcp4-M9yo_2y94LM2mu8AV6VP7XAPAPp_l-6ZKPbMj1f91GgOUt2prz3zE7KCR0jB2jz6FhbqlrRX33bHcOxZk4mGDKBx2wTTIXkbUpve60ZbDfZXxWUY5wvRMbPI0z-Ed8ZMV4naITpmTCl2KkUuWkcZo-W2h-GRwhlU9toSKeQuDzLaW746-S4MK09anbm3guJ8AYbMenJ5Be6ZrULcmeQmtiOQA'
        ]
    },
    'solaris1': {
        title: 'Solaris Band',
        price: '$1,800',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCYTIp9mLUHfBmlXdLZDGMHnpTcjsykrmHPlthepF3kyPq8mV5_qpvGIlbIaqJv3gA0ZcsBx9lM2jUiP86-Cc7e6_2zbwbhB4maKkeS6FzVMMAnyGSxL5UP88r9i8nkt7ZXPAdsdAQ_yf6WRPI650pptMD0FFKievVgRno8Ht_8YJ-VYXwXUFogjwKlWjm6Tuz4R_pDvdslodnXbiipIinbUnLQ9POxjQhW-eIsMqqC1a7FgqxnQXWFff-EbImQGK92B9Y0m7KLaww',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCYTIp9mLUHfBmlXdLZDGMHnpTcjsykrmHPlthepF3kyPq8mV5_qpvGIlbIaqJv3gA0ZcsBx9lM2jUiP86-Cc7e6_2zbwbhB4maKkeS6FzVMMAnyGSxL5UP88r9i8nkt7ZXPAdsdAQ_yf6WRPI650pptMD0FFKievVgRno8Ht_8YJ-VYXwXUFogjwKlWjm6Tuz4R_pDvdslodnXbiipIinbUnLQ9POxjQhW-eIsMqqC1a7FgqxnQXWFff-EbImQGK92B9Y0m7KLaww',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCYTIp9mLUHfBmlXdLZDGMHnpTcjsykrmHPlthepF3kyPq8mV5_qpvGIlbIaqJv3gA0ZcsBx9lM2jUiP86-Cc7e6_2zbwbhB4maKkeS6FzVMMAnyGSxL5UP88r9i8nkt7ZXPAdsdAQ_yf6WRPI650pptMD0FFKievVgRno8Ht_8YJ-VYXwXUFogjwKlWjm6Tuz4R_pDvdslodnXbiipIinbUnLQ9POxjQhW-eIsMqqC1a7FgqxnQXWFff-EbImQGK92B9Y0m7KLaww'
        ]
    },
    'celestial2': {
        title: 'Celestial Pendant',
        price: '$5,400',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4lfzdzAshnWMUaj1qKencRDIKgHYDaTqoeAguw63fE2oYD8Lfw2nJL-sNY1DAC-CYt3oRCNtvNxH-bhgdg7yo87LJG6sLo1xvOElqG5249gT64fZT-lCx_dLM8YhOpzDHEW9lr-HpTGBQ5ywnRIERpqW8bA6gCv44LPFv1CoXe9fmpvYsQct83oa0ROOz6dFJhlkXGqMqIQUWNF5FdsYN-IiioD9bTwTPvbkzESW2k2J16pIeFSa7QiXrCRdF9xwSwKvh0feHVA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4lfzdzAshnWMUaj1qKencRDIKgHYDaTqoeAguw63fE2oYD8Lfw2nJL-sNY1DAC-CYt3oRCNtvNxH-bhgdg7yo87LJG6sLo1xvOElqG5249gT64fZT-lCx_dLM8YhOpzDHEW9lr-HpTGBQ5ywnRIERpqW8bA6gCv44LPFv1CoXe9fmpvYsQct83oa0ROOz6dFJhlkXGqMqIQUWNF5FdsYN-IiioD9bTwTPvbkzESW2k2J16pIeFSa7QiXrCRdF9xwSwKvh0feHVA',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4lfzdzAshnWMUaj1qKencRDIKgHYDaTqoeAguw63fE2oYD8Lfw2nJL-sNY1DAC-CYt3oRCNtvNxH-bhgdg7yo87LJG6sLo1xvOElqG5249gT64fZT-lCx_dLM8YhOpzDHEW9lr-HpTGBQ5ywnRIERpqW8bA6gCv44LPFv1CoXe9fmpvYsQct83oa0ROOz6dFJhlkXGqMqIQUWNF5FdsYN-IiioD9bTwTPvbkzESW2k2J16pIeFSa7QiXrCRdF9xwSwKvh0feHVA'
        ]
    }
};
