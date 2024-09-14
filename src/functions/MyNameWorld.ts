import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function MyNameWorld(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world. Please enter your name for the greeting!';

    return { body: `Hello, ${name}!` };
};

app.http('MyNameWorld', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: MyNameWorld
});
