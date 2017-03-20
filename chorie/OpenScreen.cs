using System;

using Xamarin.Forms;

namespace chorie
{
	public class OpenScreen : ContentPage
	{
		public OpenScreen()
		{
			Label header = new Label
			{
				Text = "Choose template",
				FontSize = Device.GetNamedSize (NamedSize.Large, typeof(Label)),
				HorizontalOptions = LayoutOptions.Center
			};

			Picker picker = new Picker
			{
				Title = "Formation",
				VerticalOptions = LayoutOptions.CenterAndExpand
			};

			picker.Items.Add("Horizontal Line");
			picker.Items.Add("Vertical Line");
			picker.Items.Add("Circle");

			Content = new StackLayout
			{
				Children =
				{
					header,
					picker,
				}
			};

		}
	}
}

