<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class ParticipantController extends Controller
{
    public function join(Event $event)
    {
        $user = auth()->user();

        $event->participants()->syncWithoutDetaching([$user->id]);
    }

    public function leave(Event $event)
    {
        $user = auth()->user();

        $event->participants()->detach([$user->id]);
    }
}
