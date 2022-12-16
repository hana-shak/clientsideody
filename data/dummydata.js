import Category from '../models/category';
import SubCategory from '../models/subcategory';
import Discussion from '../models/discussion';

export const CATEGORIES = [
    
        new Category('c1', 'Atopic', '#f5428d'),
        new Category('c2', 'Kids', '#f54242'),
        new Category('c3', 'Products', '#f5a442'),
        new Category('c4', 'Nutritions', '#f5d142'),
        new Category('c5', 'Care Giver', '#368dff'),
        new Category('c6', 'School', '#41d95d'),
        new Category('c7', 'Personality', '#9eecff'),
        new Category('c8', 'Males', '#b9ffb0'),
        new Category('c9', 'Female', '#ffc7ff'),
        new Category('c10', 'Doctors', '#47fced')
    
];

export default SUBCATEGORIES = [
     // id, categoryId, name, description, image
         new SubCategory('s1',
                         ['c1'] ,
                         'types',
                         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                         'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'
                         ),

        new SubCategory('s2',
                        ['c2','c5','c6'] ,
                        'Eczema for teenagers',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layoutIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
        ),

        new SubCategory('s3',
                        ['c1', 'c8', 'c9'] ,
                         'Moisturizers, Lotions & Creams',
                         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                         'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
                         ),

        new SubCategory('s4',
                        ['c4'] ,
                         'Food Allergy & Eczema ',
                         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                         'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
                         ),

        new SubCategory('s5',
                        ['c1','c3'] ,
                        'Shampoo',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
                        ),

        new SubCategory('s6',
                        ['c1','c4'] ,
                        'Immune Booster Foods',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
                        ),

        new SubCategory('s7',
                        ['c1','c5','c7'] ,
                        'Stress',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
                        ),

        new SubCategory('s8',
                        ['c2'] ,
                        'Itchy Kid',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
                        ),

        new SubCategory('s9',
                        ['c1','c10'] ,
                        'Treatment',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
                        ),

        new SubCategory('s10',
                        ['c7','c9'] ,
                        'Self-Confedince',
                        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
                        'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                        ),
        
];

export const DISCUSSIONS = [
        new Discussion (
                'd1',
                's1',
                'Hand eczema',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),

        new Discussion (
                'd2',
                's1',
                'Face eczema',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
                 true,
                ),

        new Discussion (
                'd3',
                's3',
                'Best hand cream eczema',
                'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
                 false,
        ),
        new Discussion (
                'd4',
                's4',
                'Soya Allergy',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),
        new Discussion (
                'd5',
                's4',
                'Peanut Butter Allergy',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 false,
        ),

       
        new Discussion (
                'd6',
                's4',
                'Chocolate OR Milk?',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),
        new Discussion (
                'd7',
                's1',
                'Is it dust or water?',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 false,
        ),
        new Discussion (
                'd8',
                's9',
                'Cortison on face & Coloration',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),

        new Discussion (
                'd9',
                's9',
                'Dupixen',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
                ),

        new Discussion (
                'd10',
                's1',
                'How to deal with sudden flare?',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),
        new Discussion (
                'd11',
                's1',
                'Hand eczema',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),
        new Discussion (
                'd12',
                's10',
                'Self-Confident Booster',
                'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
                 false,
        ),

        new Discussion (
                'd13',
                's8',
                'Angry & Comparison',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                 true,
        ),
        new Discussion (
                'd14',
                's8',
                'Dirty Clothes & sheets all time',
                'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
                false,
        ),
        new Discussion (
                'd15',
                's10',
                'Daughter Self-confident',
                'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
                 true,
        ),
];
