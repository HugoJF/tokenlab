<?php

namespace App\Policies;

use App\Models\Event;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, Event $event)
    {
        return $event->user->is($user);
    }

    public function update(User $user, Event $event)
    {
        return $event->user->is($user);
    }

    public function create(User $user)
    {
        return true;
    }

    public function delete(User $user, Event $event)
    {
        return $event->user->is($user);
    }
}
