<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Screen;

class ScreenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $screen = new Screen();
        $screen->title = 'Экран_1';
        $screen->url = 'url_1';
        $screen->save();

        $screen = new Screen();
        $screen->title = 'Экран_2';
        $screen->url = 'url_2';
        $screen->save();

        $screen = new Screen();
        $screen->title = 'Экран_3';
        $screen->url = 'url_3';
        $screen->save();
    }
}
