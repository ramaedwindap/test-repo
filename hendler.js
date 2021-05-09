const handler = (request, h) => {
    const response = h.response('Success');
    response.type('text/html');
    response.header('X-Custom', 'some-value');
    return response
}

const handler = (request, h) => {
    return h.response('Success')
        .type('text/html')
}