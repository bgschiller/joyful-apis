## amazon s3 upload

Let's say you're making a little node app, and it needs to accept user-uploaded content, and forward it on to S3. What's the ideal api for that look like?

But s3.putObject isn't a promise.

But s3.putObject (even thought it says in [the docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property) that it accepts a stream), will fail at this point.

Turns out, s3.putObject accepts streams *only if they were created with `fs.createReadStream`*. ie: they are backed by a file descriptor.

So we can't use regular old putObject. What else is available? Well, there's multi-part uploads...

But, `partNumber` may have changed by the time the response comes back from aws:

And, in fact, there's no guarantee that the uploadPart callbacks will be called in order:

And actually, it's likely that when 'end' is triggered, the parts are not all uploaded:

Whoa. This has gotten really complicated. It's actually not quite done yet (besides the lack of error handling), because AWS has one more surprise in store for us. It turns out that the smallest allowable part must be 5MB.

But let's talk about that API. We wanted to do this:

And instead we got bogged down in details about concurrency and callbacks and buffer sizes and ETags.

Now, there are good reasons why Amazon's multipart upload works this way:

1. It's more fault-tolerant. You don't have to restart a 500 GB upload just because one chunk failed.
2. It's parallelizable. Possible to upload multiple chunks at the same time.
3. It maps directly to HTTP calls, which is important because that's how you'll be billed.

However, these functions are best thought-of as building blocks; the primitives used to create a _better api_.

Which we can do! We don't have to contend with sub-par APIs! We're programmers!

I find it's helpful to have names we can use to describe attributes of an API that make it pleasant or unpleasant. Names give us power. Sapir-Whorf and all that. They're also useful for communicating with other people; describing why you prefer one alternative over another.

"I hope, by the end of this talk, you'll have a shared vocabulary for talking about good API Design"

Field Guide to API Design:

1. Orient around use, not internals (what's the name for this?)
2. Suffer for your API
3. Move Complexity Downward
4. Different intents want different functions
5. Design the API you wish you had, then make that


-------------

Designing the programmer's UI

A friend of mine says that APIs are the UIs programmers interact with. Using API here in the sense of "the interface to a library" rather than necessarily an HTTP API.

A good API is a joy to use.  A bad one can be tear- and swear word-inducing. We'll look at examples of each, and develop some guidelines for how to build a joyful API. Above all, they require empathy for the people who will be using your library.

guidelines:
- Suffer for your API (AWS S3 putObject)
- Move Complexity Downward (Virtual DOM)
- Make common things easy (PuLP)
- Clear Purpose: Different intents want different functions (tz in python thing)
- Use-Centric: Orient around use, not internals (requests vs urllib)
- Empathetic: Design the API you wish you had, then make that. (adapter pattern, PuLP, AWS S3 putObject)

-----------------

Write the API you wish you had, then make that.

- high-level
Example: aws S3 putObject accepts a stream, but only one that was made from fs.createReadStream. It needs to know full size. There's also multi-part upload, but you must pass exactly 5mb chunks. Be cooler if you could just pipe in a stream...

Anytime the call-site of your function has extra stuff. So, functions that need to be called in a particular order, or composed with one another. Eg, withPreservedComponents. Another eg: hagrid.vuexPlugin needs to bind:

plugins: [ hagrid.vuexPlugin.bind(hagrid) ]
vs
plugins: [ hagrid.vuexPlugin ]

Eg: hagrid events and logging out. Annoying that we have to centralize knowledge of what needs to be done on logout. This is what events are for. But it's difficult to register events because we don't have access to store.dispatch yet...

eg: PuLP library. A common thing to need is binary AND, OR, etc. This is very difficult. We need to be able to make synthetic variables and add constraints. How to get the model in scope? with stmt for context stack.

virtual DOM saves us from having to .appendChild, .removeChild, set .innerHTML, etc. It's a declarative layer. demo https://bl.ocks.org/mbostock/3808234 But it's not a perfect abstraction layer! Show Sean's GIF loading bug, where the <img> needed a key prop to prevent odd behavior.

Python requests vs urllib2.

Danger: making your API map directly to your internals. Instead, think about how people would like to use it. Requires _empathy_

Quote: "UIs are interfaces people interact with. APIs are the interfaces programs interact with." -
Vince's friend. But people write the programs, so APIs are UIs too.

"Suffer for your API". If there's a hard bit of code, or a tricky decision to make. Make it. Don't force it onto clients of your library. Configuration params should have defaults (related to "move complexity downward", as in Ousterhout)

Datetime .astimezone vs .localize vs .replace(tzinfo=...)

Danger: re-using a function for a conceptually different task.

.astimezone is used for both
- adding tz info to a naive datetime
- changing the tz info of an aware datetime

This is confusing behavior


eg: https://github.com/jwt-dotnet/jwt#parsing-decoding-and-verifying-token

provide default values when possible.