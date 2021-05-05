<?php

namespace Tests\Feature;

use App\Models\Event;
use App\Models\User;
use Tests\TestCase;

class EventTest extends TestCase
{
    /**
     * @return User
     */
    protected function loginAsUser()
    {
        $user = User::factory()->create();

        auth()->login($user);

        return $user;
    }

    protected function assertEventCount($count)
    {
        $response = $this->get('/api/events');

        $response->assertStatus(200);
        $response->assertJsonCount($count, 'data');
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_index_will_return_user_events()
    {
        $user = $this->loginAsUser();
        $other = User::factory()->create();

        Event::factory()->for($user)->count(5)->create();
        Event::factory()->for($other)->count(10)->create();

        $this->assertEventCount(5);
    }

    public function test_store_will_persist_to_database()
    {
        $this->loginAsUser();

        $this->assertEventCount(0);

        $this->post('/api/events', [
            'title'       => 'My event',
            'description' => 'My testing event',
            'starts_at'   => now(),
            'ends_at'     => now()->addHour(),
        ]);

        $this->assertEventCount(1);
    }
}
