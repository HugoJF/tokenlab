<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventStoreRequest;
use App\Http\Requests\EventUpdateRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Models\User;

class EventController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Event::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EventResource::collection(
            Event::with(['user', 'participants'])->paginate(20)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(EventStoreRequest $request)
    {
        /** @var User $user */
        $user = auth()->user();

        $event = $user->events()->create($request->validated());

        return new EventResource($event);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Event $event
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        $event->loadMissing(['user', 'participants']);

        return new EventResource($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Event        $event
     *
     * @return \Illuminate\Http\Response
     */
    public function update(EventUpdateRequest $request, Event $event)
    {
        $event->update($request->validated());

        return new EventResource($event);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Event $event
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return response()->noContent();
    }
}
