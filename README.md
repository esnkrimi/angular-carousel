#ANGULAR # EsnCarousel

Angular horizontal image carousel.

---------------------INSTALLATION

     npm i esn-carousel --force

     import { EsnCarouselModule } from 'esn-carousel';
        

---------------------Demo

        https://stackblitz.com/edit/esn-carousel

  	    https://esn-carousel.stackblitz.io


---------------------Usage
--------------------TS
//info is list of items
        data = {
            info: [
            {
                wishlist: true,
                key: 1,
                off: 10,
                f1: 'encre noire',
                f2: 'LALIQUE',
                f3: '',
                f4: 350,
            },
            {
                wishlist: false,
                key: 2,
                off: 20,
                f1: 'Lalique Ametys',
                f2: 'LALIQUE',
                f3: 'FRANCE',
                f4: 450,
            },
            {
                wishlist: true,
                key: 3,
                off: 10,
                f1: 'BIK',
                f2: 'BIK',
                f3: 'IRAN',
                f4: 200,
            },
            {
                wishlist: false,
                key: 4,
                off: 25,
                f1: 'Tuscan',
                f2: 'tomford',
                f3: 'FRANCE',
                f4: 800,
            },
            {
                wishlist: true,
                key: 5,
                off: 10,
                f1: 'Aljohar',
                f2: 'Alreza',
                f3: 'UAE',
                f4: 250,
            },
            {
                wishlist: false,
                key: 6,
                off: 45,
                f1: 'WM',
                f2: 'JOOP',
                f3: '',
                f4: 250,
            },
            {
                wishlist: true,
                key: 7,
                off: 10,
                f1: 'PARDON',
                f2: 'Black Afgano',
                f3: '',
                f4: 500,
            },
            {
                wishlist: false,
                key: 8,
                off: 0,
                f1: 'BA',
                f2: 'Black Afgano',
                f3: '',
                f4: 900,
            },
            {
                wishlist: true,
                key: 9,
                off: 10,
                f1: 'WomenPA',
                f2: 'Romansteel',
                f3: 'ITALY',
                f4: 150,
            },
            {
                wishlist: true,
                key: 10,
                off: 0,
                f1: 'BGAtrHarbology',
                f2: 'Harbology',
                f3: '',
                f4: 180,
            },
            {
                wishlist: true,
                key: 11,
                off: 10,
                f1: 'andreas',
                f2: 'ALTOKAD',
                f3: 'JAPAN',
                f4: 250,
            },
            {
                wishlist: true,
                key: 12,
                off: 5,
                f1: 'Catepilar',
                f2: 'GERMO',
                f3: '',
                f4: 150,
            },
            {
                wishlist: true,
                key: 13,
                off: 10,
                f1: 'Fantasy',
                f2: 'Rojohan',
                f3: '',
                f4: 500,
            },
            {
                wishlist: true,
                key: 14,
                off: 5,
                f1: 'andreas',
                f2: 'Schmit',
                f3: 'Swiss',
                f4: 200,
            },
            {
                wishlist: true,
                key: 15,
                off: 25,
                f1: 'Faranhayt',
                f2: 'Alazim',
                f3: 'UAE',
                f4: 500,
            },
            ],
            imagePrefix: 'https://www.burjcrown.com/drm/users/1/',
            imagePostfix: '/1.jpg',
            destinationUrlPrefix: 'https://www.burjcrown.com/zoom/',
            bgColor: 'white',
            textColor: 'black',
            borderColor: '#ccffdd',
            imgWidth: '10em',
            imgHeight: '10em',
            numberOfPage: 5,
            arrowColor: 'yellow',
            Speed: 3,
            //Speed ,for mobile view select 3 or lower for pc view select 8 or more height: '24em',
            autoPlay: true
        };

--------------------HTML

            <esn-carousel
            [data]="data">
            </esn-carousel>



