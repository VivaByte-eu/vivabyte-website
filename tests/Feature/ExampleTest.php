<?php

test('returns a successful response', function () {
    $response = $this->get(route('landing', ['locale' => 'pt']));

    $response->assertOk();
});
