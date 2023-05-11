import { useContextSelector } from 'use-context-selector';

import { HomeContext } from 'common/context/HomeContext';

export function useCategories() {
  const categories = useContextSelector(HomeContext, (home) => home.categories);
  const category = useContextSelector(HomeContext, (home) => home.category);

  const onUpdateStateCategories = useContextSelector(HomeContext, (home) => home.onUpdateStateCategories);
  const onChangeCaregory = useContextSelector(HomeContext, (home) => home.onChangeCaregory);
  const onLoadServicesPerCategory = useContextSelector(HomeContext, (home) => home.onLoadServicesPerCategory);

  return {
    onUpdateStateCategories,
    onChangeCaregory,
    categories,
    category,
    onLoadServicesPerCategory,
  };
}
