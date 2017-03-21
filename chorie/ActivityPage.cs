using System;

using Xamarin.Forms;

namespace chorie
{
	public class ActivityPage : ContentPage
	{
		public ActivityPage()
		{
			DependencyService.Get<IOrientationHandler>().ForceLandscape();
			Content = new StackLayout
			{
				Children = {
					new Label { Text = "Hello ContentPage" }
				}
			};
		}
	}
}

