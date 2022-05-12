# "Paralysis by analysis"

It's difficult to quantify all of the factors that go into why you should do this thing instead of that thing. And when you think about it, it's also very concerning how informal our decision making tends to be. Shouldn't we be as technical as possible when it comes to making life-defining choices?

I have a long list of things I want to do with my life, more than I'll ever be able to do. Yet, I often find myself doing none of them, lost in a sense of indecision, pulled by my heart in a million different directions. To combat this, I came up with a simple formula to try and make a path forward more clear for myself:

I create a set of properties for each option I'm considering. These properties are things that I want more of in my life, or things that I want to improve.

`properties = {...}`

Each one of these properties is given a "weight", based on how I prioritize the importance of one property over another.

`properties[x].weight = weight`

I create grades for how much each option optimizes for each property. I then multiply the grade by the weight.

`property_score = grade * weight`

All of the weighted values of the properties for that option are added together, creating the score for that option. Whichever option has the highest score is prioritized.

`option_score = property_score[0] + property_score[1] + property_score[2] ... property_score[n]`

This is a simple approach, but there are additional parameters that could considered. For example, a property's value could hypothetically scale with the value of another property. Optimally, the scaling should be weighted against an appropriate mathematical function, in the case that the strength of the scaling changes based on the property's score.

`scaled_score = sigmoid(property_score)`
