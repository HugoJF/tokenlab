<?php

namespace Database\Factories;

use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $startsAt = $this->faker->dateTimeBetween(
            now()->subDays(5),
            now()->addMonth()
        );

        $endsAt = $this->faker->dateTimeBetween(
            Carbon::instance($startsAt)->addHour(),
            Carbon::instance($startsAt)->addMonth()
        );

        return [
            'title'       => $this->faker->catchPhrase,
            'description' => $this->faker->sentence(30),
            'starts_at'   => $startsAt,
            'ends_at'     => $endsAt,
        ];
    }
}
