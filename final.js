function changeContent(id1, content1, id2, title)
{

	document.getElementById("blank").style.visibility = "visible";
	var picture = document.getElementById(id1);
	picture.src = content1;

  if (title == "The Hate U Give")
  {
  	var summary = document.getElementById(id2);
    summary.innerHTML = info;
  }

  if (title == "On The Come Up")
  {
    var summary = document.getElementById(id2);
    summary.innerHTML = otcuinfo;
  }

	if (title == "Brown Girl Dreaming")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = bgdinfo;
	}

	if (title == "The Other Side")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = tosinfo;
	}

	if (title == "I Know Why The Caged Bird Sings")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = birdsinfo;
	}

	if (title == "And Still I Rise")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = asirinfo;
	}

	if (title == "Kindred")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = kindredinfo;
	}

	if (title == "Wild Seed")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = wsinfo;
	}

	if (title == "Black Girl Magic")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = bgminfo;
	}
	if (title == "African American Poetry")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = aapinfo;
	}

	if (title == "The Bluest Eye")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = tbeinfo;
	}
	if (title == "Invisible Man")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = iminfo;
	}

	if (title == "wkb")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = wkbinfo;
	}

	if (title == "How To Be Black")
	{
		var summary = document.getElementById(id2);
		summary.innerHTML = htbbinfo;
	}
}




var info = "Sixteen-year-old Starr Carter moves between two worlds: the poor neighborhood where she lives and the fancy suburban prep school she attends. The uneasy balance between these worlds is shattered when Starr witnesses the fatal shooting of her childhood best friend Khalil at the hands of a police officer. Khalil was unarmed. Soon afterward, his death is a national headline. Some are calling him a thug, maybe even a drug dealer and a gangbanger. Protesters are taking to the streets in Khalil's name. Some cops and the local drug lord try to intimidate Starr and her family. What everyone wants to know is: what really went down that night? And the only person alive who can answer that is Starr. But what Starr does or does not say could upend her community. It could also endanger her life.";

var otcuinfo = "Sixteen-year-old Bri wants to be one of the greatest rappers of all time. Or at least make it out of her neighborhood one day. As the daughter of an underground rap legend who died before he hit big, Bri’s got big shoes to fill. But now that her mom has unexpectedly lost her job, food banks and shutoff notices are as much a part of Bri’s life as beats and rhymes. With bills piling up and homelessness staring her family down, Bri no longer just wants to make it—she has to make it. On the Come Up is Angie Thomas’s homage to hip-hop, the art that sparked her passion for storytelling and continues to inspire her to this day. It is the story of fighting for your dreams, even as the odds are stacked against you; of the struggle to become who you are and not who everyone expects you to be; and of the desperate realities of poor and working-class black families.";

var bgdinfo = "Raised in South Carolina and New York, Woodson always felt halfway home in each place. In vivid poems, she shares what it was like to grow up as an African American in the 1960s and 1970s, living with the remnants of Jim Crow and her growing awareness of the Civil Rights movement. Touching and powerful, each poem is both accessible and emotionally charged, each line a glimpse into a child's soul as she searches for her place in the world. Woodson's eloquent poetry also reflects the joy of finding her voice through writing stories, despite the fact that she struggled with reading as a child. Her love of stories inspired her and stayed with her, creating the first sparks of the gifted writer she was to become."

var tosinfo = "Clover's mom says it isn't safe to cross the fence that segregates their African-American side of town from the white side where Anna lives. But the two girls strike up a friendship, and get around the grown-ups' rules by sitting on top of the fence together. With the addition of a brand-new author's note, this special edition celebrates the tenth anniversary of this classic book. As always, Woodson moves readers with her lyrical narrative, and E. B. Lewis's amazing talent shines in his gorgeous watercolor illustrations."

var asirinfo= "In this inspiring poem, Maya Angelou celebrates the courage of the human spirit over the harshest of obstacles. An ode to the power that resides in us all to overcome the most difficult circumstances, this poem is truly an inspiration and affirmation of the faith that restores and nourishes the soul. Entwined with the vivid paintings of Diego Rivera, the renowned Mexican artist, Angelou's words paint a portrait of the amazing human spirit, its quiet dignity, and pools of strength and courage."

var birdsinfo = "Sent by their mother to live with their devout, self-sufficient grandmother in a small Southern town, Maya and her brother, Bailey, endure the ache of abandonment and the prejudice of the local 'powhitetrash.' At eight years old and back at her mother’s side in St. Louis, Maya is attacked by a man many times her age—and has to live with the consequences for a lifetime. Years later, in San Francisco, Maya learns that love for herself, the kindness of others, her own strong spirit, and the ideas of great authors will allow her to be free instead of imprisoned."

var kindredinfo = "The first science fiction written by a black woman, Kindred has become a cornerstone of black American literature. This combination of slave memoir, fantasy, and historical fiction is a novel of rich literary complexity. Having just celebrated her 26th birthday in 1976 California, Dana, an African-American woman, is suddenly and inexplicably wrenched through time into antebellum Maryland. After saving a drowning white boy there, she finds herself staring into the barrel of a shotgun and is transported back to the present just in time to save her life. During numerous such time-defying episodes with the same young man, she realizes the challenge she’s been given: to protect this young slaveholder until he can father her own great-grandmother."

var wsinfo = "Doro is an entity who changes bodies like clothes, killing his hosts by reflex or design. He fears no one until he meets Anyanwu. Anyanwu is a shapeshifter who can absorb bullets and heal with a kiss and savage anyone who threatens her. She fears no one until she meets Doro. Together they weave a pattern of destiny (from Africa to the New World) unimaginable to mortals."

var bgminfo = "The BreakBeat Poets Vol. 2: Black Girl Magic continues and deepens the work of the first BreakBeat Poets anthology by focusing on some of the most exciting Black women writing today. This anthology breaks up the myth of hip-hop as a boys’ club, and asserts the truth that the cypher is a feminine form."

var aapinfo = "The newest addition to the acclaimed Poetry for Young People series shines a light on the power and beauty of African-American verse. Co-editors Arnold Rampersad and Marcellus Blount—both towering figures in literary criticism—have put together an impressive anthology that will open up a world of wonderful word images for children. The classic poems come from some of the most influential and celebrated African-American writers in history, including Langston Hughes, Gwendolyn Brooks, Countee Cullen, Lucille Clifton, and James Baldwin. Helpful and generous annotations, a lively introduction, and beautiful illustrations by Karen Barbour make this the ideal book to introduce young readers to the marvels of poetry."

var tbeinfo = "The Bluest Eye is Toni Morrison's first novel, a book heralded for its richness of language and boldness of vision. Set in the author's girlhood hometown of Lorain, Ohio, it tells the story of black, eleven-year-old Pecola Breedlove. Pecola prays for her eyes to turn blue so that she will be as beautiful and beloved as all the blond, blue-eyed children in America. In the autumn of 1941, the year the marigolds in the Breedloves' garden do not bloom. Pecola's life does change- in painful, devastating ways. What its vivid evocation of the fear and loneliness at the heart of a child's yearning, and the tragedy of its fulfillment. The Bluest Eye remains one of Tony Morrisons's most powerful, unforgettable novels- and a significant work of American fiction."

var iminfo = "First published in 1952 and immediately hailed as a masterpiece, Invisible Man is one of those rare novels that have changed the shape of American literature. For not only does Ralph Ellison's nightmare journey across the racial divide tell unparalleled truths about the nature of bigotry and its effects on the minds of both victims and perpetrators, it gives us an entirely new model of what a novel can be. As he journeys from the Deep South to the streets and basements of Harlem, from a horrifying 'battle royal' where black men are reduced to fighting animals, to a Communist rally where they are elevated to the status of trophies, Ralph Ellison's nameless protagonist ushers readers into a parallel universe that throws our own into harsh and even hilarious relief. Suspenseful and sardonic, narrated in a voice that takes in the symphonic range of the American language, black and white, Invisible Man is one of the most audacious and dazzling novels of our century."

var wkbinfo = "The Awkward Thoughts of W. Kamau Bell is a humorous, well-informed take on the world today, tackling a wide range of issues, such as race relations; fatherhood; the state of law enforcement today; comedians and superheroes; right-wing politics; left-wing politics; failure; his interracial marriage; white men; his up-bringing by very strong-willed, race-conscious, yet ideologically opposite parents; his early days struggling to find his comedic voice, then his later days struggling to find his comedic voice; why he never seemed to fit in with the Black comedy scene . . . or the white comedy scene; how he was a Black nerd way before that became a thing; how it took his wife and an East Bay lesbian to teach him that racism and sexism often walk hand in hand; and much, much more."

var htbbinfo = "Baratunde Thurston shares his 30-plus years of expertise in being black, with helpful essays like “How to Be the Black Friend,” “How to Speak for All Black People,” “How To Celebrate Black History Month,” and more, in this satirical guide to race issues—written for black people and those who love them. Audacious, cunning, and razor-sharp, How to Be Black exposes the mass-media’s insidiously racist, monochromatic portrayal of black culture’s richness and variety. Fans of Stuff White People Like, This Week in Blackness, and Ending Racism in About an Hour will be captivated, uplifted, incensed, and inspired by this hilarious and powerful attack on America’s blacklisting of black culture: Baratunde Thurston’s How to Be Black."
