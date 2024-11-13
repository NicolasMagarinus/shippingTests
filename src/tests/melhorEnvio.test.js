const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzQ4ZTlhYTAzOGE5ZWY2MjBkMjNjZDRiZmQ2MmFlOTE5N2ZhNzUxMTVjYzYwNzI4YThmMDNhOTgyZDExNTJjZjdjNWZkZjRjNGE5NzBiOWUiLCJpYXQiOjE3MzA3NjI5NjIuMDk2NjM4LCJuYmYiOjE3MzA3NjI5NjIuMDk2NjQsImV4cCI6MTc2MjI5ODk2Mi4wODM3NzksInN1YiI6IjlkNjk3NGJhLTA4OTMtNDQwNy1hNjEzLTMyYTJkNGViODJlYSIsInNjb3BlcyI6WyJzaGlwcGluZy1jYWxjdWxhdGUiXX0.HQ9kUUFT4HHNHmM5jzTou5equXCnk7QPE8-_dadCWbzkDd6RYWs6P-pubGWEDzL3UiIgVdrsnl6fRrb6yXmk5KjEBE2f1snOzyPhYjn-xfEzefPomt51Ucz0F5suJiX50l-jjybVm5td1YrBvyQZ2aDsT0NJ4-jN1biIF0oAWaVaWedTaHDtwno_z-iBlnoQBYnVTem0iZ9tjDiRpuSnpGbDSbslzMg1OhfvcwI8F0xAhM7UveArPVd9g7DUbTaV9kAupekRJG2DYo7GxdVR80vx2Dh7KzZsfZU8vYEo4Dy1owSdoPOSjx6xnZW-UscFGS01OIYZ8tVY-UXRcfa9RBFZx1lG4_rQrc2-xDAlhyuocjbZUJDFM-dy3BeMPeHIfpDA11T25jZrdIJ7frIWpTOTGByQg7hjVULO_k6w_vU5F0rV2nL-NwZrSH2AVWaloF59TWJEBFGEZTKoIJ-lHg3NBWCT0h_gd8U93bo6Z_V_KbFN4JTtM_wH08hSlSxbW5y2xsjCpIxTadkF9gCV0n2fK6JeNGQhehZiaN1Sh019rTBr0I46KQa4Dd5nnGPLCOUc64DbGunqTJWlvU8AnW96ICfHh2pJj3Ez6EgbUkFd5UH3rQUm0ATjaX7PiRFmpzIaOTGBEHJRVXk_qgmX844YvFWOUMzDMFvg5SDGChg',
      'User-Agent': 'Aplicação meunomeehjao@gmail.com'
    },
    body: JSON.stringify({
      from: { postal_code: '01001000' },
      to: { postal_code: '20040030' },
      products: [{ id: 1, width: 20, height: 20, length: 20, weight: 1 }],
      services: ['1']
    })
  };

const optionsInvalid = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzQ4ZTlhYTAzOGE5ZWY2MjBkMjNjZDRiZmQ2MmFlOTE5N2ZhNzUxMTVjYzYwNzI4YThmMDNhOTgyZDExNTJjZjdjNWZkZjRjNGE5NzBiOWUiLCJpYXQiOjE3MzA3NjI5NjIuMDk2NjM4LCJuYmYiOjE3MzA3NjI5NjIuMDk2NjQsImV4cCI6MTc2MjI5ODk2Mi4wODM3NzksInN1YiI6IjlkNjk3NGJhLTA4OTMtNDQwNy1hNjEzLTMyYTJkNGViODJlYSIsInNjb3BlcyI6WyJzaGlwcGluZy1jYWxjdWxhdGUiXX0.HQ9kUUFT4HHNHmM5jzTou5equXCnk7QPE8-_dadCWbzkDd6RYWs6P-pubGWEDzL3UiIgVdrsnl6fRrb6yXmk5KjEBE2f1snOzyPhYjn-xfEzefPomt51Ucz0F5suJiX50l-jjybVm5td1YrBvyQZ2aDsT0NJ4-jN1biIF0oAWaVaWedTaHDtwno_z-iBlnoQBYnVTem0iZ9tjDiRpuSnpGbDSbslzMg1OhfvcwI8F0xAhM7UveArPVd9g7DUbTaV9kAupekRJG2DYo7GxdVR80vx2Dh7KzZsfZU8vYEo4Dy1owSdoPOSjx6xnZW-UscFGS01OIYZ8tVY-UXRcfa9RBFZx1lG4_rQrc2-xDAlhyuocjbZUJDFM-dy3BeMPeHIfpDA11T25jZrdIJ7frIWpTOTGByQg7hjVULO_k6w_vU5F0rV2nL-NwZrSH2AVWaloF59TWJEBFGEZTKoIJ-lHg3NBWCT0h_gd8U93bo6Z_V_KbFN4JTtM_wH08hSlSxbW5y2xsjCpIxTadkF9gCV0n2fK6JeNGQhehZiaN1Sh019rTBr0I46KQa4Dd5nnGPLCOUc64DbGunqTJWlvU8AnW96ICfHh2pJj3Ez6EgbUkFd5UH3rQUm0ATjaX7PiRFmpzIaOTGBEHJRVXk_qgmX844YvFWOUMzDMFvg5SDGChg',
    'User-Agent': 'Aplicação meunomeehjao@gmail.com'
  },
  body: JSON.stringify({
    from: { postal_code: '00000000' },
    to: { postal_code: '00000000' },
    products: [{ id: 1, width: -20, height: -20, length: -20, weight: -1 }],
    services: ['1']
  })
};

  test("Calculo do frete usando a API do Melhor Envio", async () => {
    fetch.mockResponseOnce(JSON.stringify({
      id: "12345",
      name: "Frete calculado",
      price: "27.50"
    }));
  
    const response = await fetch('https://melhorenvio.com.br/api/v2/me/shipment/calculate', options);
    const data = await response.json();
  
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("name", "Frete calculado");
    expect(data).toHaveProperty("price", "27.50");
  });
  
  test("Falha no cálculo do frete quando os parâmetros são inválidos", async () => {
    fetch.mockRejectOnce(new Error("Parâmetros inválidos"));
  
    try {
      await fetch('https://melhorenvio.com.br/api/v2/me/shipment/calculate', optionsInvalid);
    } catch (error) {
      expect(error.message).toBe("Parâmetros inválidos");
    }
  });
  