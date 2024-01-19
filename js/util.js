const createElementAttribute = (name, value) => {
	return {
		name,
		value,
	};
};

const createElement = (tag, className, text, attributes) => {
	const newElement = document.createElement(tag);
	if (className) {
		newElement.className = className;
	}
	newElement.textContent = text || '';
	if (attributes && attributes.length > 0) {
		for (const attr of attributes) {
			newElement.setAttribute(attr.name, attr.value);
		}
	}
	return newElement;
};

const createHeaderEl = () => {
	const headerEl = createElement('header');

	const headerTitleEl = createElement(
		'h1',
		'sr-only',
		'Single price grid component'
	);

	headerEl.appendChild(headerTitleEl);

	return headerEl;
};

const createCardEl = () => {
	const cardEl = createElement('article', 'card');

	/* section join community */
	const sectionJoinCommunityEl = createElement(
		'section',
		'card__block card__block--join-community'
	);

	const sectionJoinCommunityTitleEl = createElement(
		'h2',
		'card__title',
		'Join our community'
	);

	const sectionJoinCommunitySubtitleEl = createElement(
		'mark',
		'card__mark',
		'30-day, hassle-free money back guarantee'
	);

	const sectionJoinCommunityDescriptionEl = createElement(
		'p',
		'card__desc',
		'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.'
	);

	sectionJoinCommunityEl.appendChild(sectionJoinCommunityTitleEl);
	sectionJoinCommunityEl.appendChild(sectionJoinCommunitySubtitleEl);
	sectionJoinCommunityEl.appendChild(sectionJoinCommunityDescriptionEl);

	/* section group */
	const sectionGroupEl = createElement('div', 'card__group');

	/* section monthly subscription */
	const sectionMonthlySubscriptionEl = createElement(
		'section',
		'card__block card__block--monthly-subsription'
	);

	const sectionMonthlySubscriptionTitleEl = createElement(
		'h3',
		'card__title',
		'Monthly Subscription'
	);

	const sectionMonthlySubscriptionPriceEl = createElement('p', 'card__price');

	const sectionMonthlySubscriptionPriceAmountEl = createElement(
		'span',
		'num',
		'$29'
	);

	const sectionMonthlySubscriptionPriceLabelEl = createElement(
		'span',
		'label',
		'per month'
	);

	sectionMonthlySubscriptionPriceEl.appendChild(
		sectionMonthlySubscriptionPriceAmountEl
	);
	sectionMonthlySubscriptionPriceEl.appendChild(
		sectionMonthlySubscriptionPriceLabelEl
	);

	const sectionMonthlySubscriptionDescriptionEl = createElement(
		'p',
		'card__desc',
		'Full access for less than $1 a day'
	);

	const sectionMonthlySubscriptionLinkEl = createElement(
		'a',
		'btn btn--primary btn--full',
		'Sign Up',
		[createElementAttribute('href', '#')]
	);

	sectionMonthlySubscriptionEl.appendChild(sectionMonthlySubscriptionTitleEl);
	sectionMonthlySubscriptionEl.appendChild(sectionMonthlySubscriptionPriceEl);
	sectionMonthlySubscriptionEl.appendChild(
		sectionMonthlySubscriptionDescriptionEl
	);
	sectionMonthlySubscriptionEl.appendChild(sectionMonthlySubscriptionLinkEl);

	/* section why us */
	const sectionWhyUsEl = createElement(
		'section',
		'card__block card__block--why-us'
	);

	const sectionWhyUsTitleEl = createElement('h3', 'card__title', 'Why Us');

	const sectionWhyUsListEl = createElement('ul', 'card__list');

	const benefits = [
		'Tutorials by industry experts',
		'Peer & expert code review',
		'Coding exercises',
		'Access to our GitHub repos',
		'Community forum',
		'Flashcard decks',
		'New videos every week',
	];

	for (const benefit of benefits) {
		const sectionWhyUsListItemEl = createElement('li', null, benefit);

		sectionWhyUsListEl.appendChild(sectionWhyUsListItemEl);
	}

	sectionWhyUsEl.appendChild(sectionWhyUsTitleEl);
	sectionWhyUsEl.appendChild(sectionWhyUsListEl);

	sectionGroupEl.appendChild(sectionMonthlySubscriptionEl);
	sectionGroupEl.appendChild(sectionWhyUsEl);

	cardEl.appendChild(sectionJoinCommunityEl);
	cardEl.appendChild(sectionGroupEl);

	return cardEl;
};

const createMainEl = () => {
	const mainEl = createElement('main');

	const mainContainerEl = createElement('div', 'container');

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	return mainEl;
};

const createFooterEl = () => {
	const footerEl = createElement('footer');

	const footerContainerEl = createElement('div', 'container');

	const footerTextEl = createElement('p', null, 'Challenge by ');

	const footerTextLinkCreatorEl = createElement(
		'a',
		'btn btn--link',
		'Frontend Mentor',
		[
			createElementAttribute(
				'href',
				'https://www.frontendmentor.io?ref=challenge'
			),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	const footerTextLinkCoderEl = createElement(
		'a',
		'btn btn--link',
		'al3xback',
		[
			createElementAttribute('href', 'https://github.com/al3xback'),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return footerEl;
};

export {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createCardEl,
	createMainEl,
	createFooterEl,
};
