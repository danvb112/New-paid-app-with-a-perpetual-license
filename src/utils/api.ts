const headers = {
  Authorization: "Basic " + btoa("test@liferay.com:test"),
  "Content-Type": "application/json",
};

export function createApp({
  appDescription,
  appName,
}: {
  appDescription: string;
  appName: string;
}) {
  return fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products`,
    {
      body: JSON.stringify({
        active: true,
        catalogId: 41909,
        description: { en_US: appDescription },
        name: { en_US: appName },
        productType: "simple",
      }),
      headers,
      method: "POST",
    }
  );
}

export function submitAttachment({
  body,
  externalReferenceCode,
}: {
  body: Object;
  externalReferenceCode: string;
}) {
  return fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products/by-externalReferenceCode/${externalReferenceCode}/attachments`,
    {
      body: JSON.stringify(body),
      headers,
      method: "POST",
    }
  );
}

export function submitImage({
  body,
  externalReferenceCode,
}: {
  body: Object;
  externalReferenceCode: string;
}) {
  return fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products/by-externalReferenceCode/${externalReferenceCode}/images/by-url`,
    {
      body: JSON.stringify(body),
      headers,
      method: "POST",
    }
  );
}

export function patchAppByExternalReferenceCode({
  body,
  externalReferenceCode,
}: {
  body: Object;
  externalReferenceCode: string;
}) {
  return fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products/by-externalReferenceCode/${externalReferenceCode}/patchProductByExternalReferenceCode`,
    {
      body: JSON.stringify(body),
      headers,
      method: "PATCH",
    }
  );
}

// export function putProductCategoriesTags({
// 	appDescription,
// 	appName,
// }: {
// 	appDescription: string;
// 	appName: string;
// }) {
// 	return fetch(
// 		`http://localhost:8080/o/headless-admin-taxonomy/v1.0/sites/${1}/keywords`,
// 		{
// 			body: JSON.stringify({
// 				active: true,
// 				catalogId: 40716,
// 				productType: 'simple',
// 			}),
// 			headers,
// 			method: 'POST',
// 		}
// 	);
// }

export async function createSpecification({ body }: { body: Object }) {
  const response = await fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/specifications`,
    {
      body: JSON.stringify(body),
      headers,
      method: "POST",
    }
  );

  return await response.json();
}

export async function createProductSpecification({
  body,
  appId,
}: {
  body: Object;
  appId: string;
}) {
  const response = await fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products/${appId}/productSpecifications`,
    {
      body: JSON.stringify(body),
      headers,
      method: "POST",
    }
  );
  return await response.json();
}

export async function createSubscription({
  body,
  appERC,
}: {
  body: Object;
  appERC: string;
}) {
  const response = await fetch(
    `http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products/by-externalReferenceCode/${appERC}/subscriptionConfiguration
    `,
    {
      body: JSON.stringify(body),
      headers,
      method: "PATCH",
    }
  );
  return await response.json();
}
