using System;

using Xamarin.Forms;

namespace chorie
{
	public class Toucher : ContentPage
	{
		public Toucher()
		{
			Content = new StackLayout
			{
				Children = {
					new Label { Text = "Hello ContentPage" }
				}
			};
		}
	}
}

